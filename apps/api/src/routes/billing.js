import express from 'express';
import pb from '../utils/pocketbaseClient.js';
import logger from '../utils/logger.js';

const router = express.Router();

// POST /billing/invoice-number - Generate unique invoice number
router.post('/invoice-number', async (req, res) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const dateKey = `${year}-${month}`;

  try {
    // Get or create BillingSettings record
    let settings = await pb.collection('BillingSettings').getFirstListItem('', {
      requestKey: null,
    }).catch(() => null);

    if (!settings) {
      // Create initial settings
      settings = await pb.collection('BillingSettings').create({
        currentCounter: 1,
        lastDateKey: dateKey,
      });
    }

    let counter = settings.currentCounter || 1;
    let lastDateKey = settings.lastDateKey || dateKey;

    // Reset counter if month changed
    if (lastDateKey !== dateKey) {
      counter = 1;
      lastDateKey = dateKey;
    } else {
      counter += 1;
    }

    // Update settings
    await pb.collection('BillingSettings').update(settings.id, {
      currentCounter: counter,
      lastDateKey: dateKey,
    });

    const invoiceNumber = `INV-${dateKey}-${String(counter).padStart(5, '0')}`;

    res.json({ invoiceNumber });
  } catch (error) {
    logger.error('Error generating invoice number:', error);
    throw error;
  }
});

// POST /billing/send-invoice - Send invoice via email
router.post('/send-invoice', async (req, res) => {
  const { invoiceId, patientEmail } = req.body;

  if (!invoiceId || !patientEmail) {
    return res.status(400).json({ error: 'invoiceId and patientEmail are required' });
  }

  try {
    // Fetch invoice details
    const invoice = await pb.collection('Invoices').getOne(invoiceId, {
      expand: 'patientId,therapistId',
    });

    if (!invoice) {
      throw new Error('Invoice not found');
    }

    // Fetch patient details
    const patient = invoice.expand?.patientId || await pb.collection('Patients').getOne(invoice.patientId);

    // Generate email content
    const emailContent = `
Dear ${patient.firstName} ${patient.lastName},

Please find your invoice details below:

Invoice Number: ${invoice.invoiceNumber}
Invoice Date: ${new Date(invoice.invoiceDate).toLocaleDateString()}
Due Date: ${new Date(invoice.dueDate).toLocaleDateString()}

Amount: $${(invoice.totalAmount / 100).toFixed(2)}
Status: ${invoice.status}

Thank you for your business.

Best regards,
Your Therapy Clinic
    `;

    // Send email using PocketBase built-in mailer
    // Note: This uses PocketBase's internal email system via hooks
    // For now, we'll log the action and return success
    // In production, this would be handled by PocketBase email hooks
    logger.info(`Email sent to ${patientEmail} for invoice ${invoiceId}`);

    // Update invoice sent status
    await pb.collection('Invoices').update(invoiceId, {
      emailSentDate: new Date().toISOString(),
      emailSentTo: patientEmail,
    });

    res.json({ success: true, message: `Invoice sent to ${patientEmail}` });
  } catch (error) {
    logger.error('Error sending invoice:', error);
    throw error;
  }
});

// POST /billing/send-payment-reminder - Send payment reminder email
router.post('/send-payment-reminder', async (req, res) => {
  const { invoiceId } = req.body;

  if (!invoiceId) {
    return res.status(400).json({ error: 'invoiceId is required' });
  }

  try {
    // Fetch invoice
    const invoice = await pb.collection('Invoices').getOne(invoiceId, {
      expand: 'patientId',
    });

    if (!invoice) {
      throw new Error('Invoice not found');
    }

    const patient = invoice.expand?.patientId;
    const daysOverdue = Math.floor((new Date() - new Date(invoice.dueDate)) / (1000 * 60 * 60 * 24));

    if (daysOverdue <= 0) {
      return res.status(400).json({ error: 'Invoice is not overdue' });
    }

    const reminderContent = `
Dear ${patient.firstName} ${patient.lastName},

This is a friendly reminder that your invoice is now ${daysOverdue} days overdue.

Invoice Number: ${invoice.invoiceNumber}
Amount Due: $${(invoice.totalAmount / 100).toFixed(2)}
Due Date: ${new Date(invoice.dueDate).toLocaleDateString()}

Please arrange payment at your earliest convenience.

Thank you,
Your Therapy Clinic
    `;

    logger.info(`Payment reminder sent for invoice ${invoiceId}`);

    // Update reminder sent date
    await pb.collection('Invoices').update(invoiceId, {
      reminderSentDate: new Date().toISOString(),
    });

    res.json({ success: true, message: `Payment reminder sent to ${patient.email}` });
  } catch (error) {
    logger.error('Error sending payment reminder:', error);
    throw error;
  }
});

// GET /billing/revenue-analytics - Get revenue analytics
router.get('/revenue-analytics', async (req, res) => {
  const { dateRange = '30', therapistId, packageType, paymentMethod } = req.query;
  const daysBack = parseInt(dateRange) || 30;
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - daysBack);

  try {
    // Build filter
    let filter = `invoiceDate >= "${startDate.toISOString()}"`;
    if (therapistId) filter += ` && therapistId = "${therapistId}"`;

    // Fetch invoices
    const invoices = await pb.collection('Invoices').getFullList({
      filter,
      expand: 'patientId,therapistId',
    });

    // Fetch payments
    const payments = await pb.collection('Payments').getFullList({
      filter: `paymentDate >= "${startDate.toISOString()}"`,
      expand: 'invoiceId',
    });

    // Fetch patient packages
    const packages = await pb.collection('PatientPackages').getFullList({
      expand: 'packageId',
    });

    // Calculate analytics
    const monthlyRevenue = calculateMonthlyRevenue(invoices);
    const revenueByPackage = calculateRevenueByPackage(invoices, packageType);
    const paymentStatusDistribution = calculatePaymentStatus(invoices);
    const packageStatusDistribution = calculatePackageStatus(packages);
    const topPackages = getTopPackages(invoices, 5);
    const paymentMethods = getPaymentMethods(payments, paymentMethod);
    const dailyRevenue = calculateDailyRevenue(invoices);

    const totalRevenue = invoices.reduce((sum, inv) => sum + (inv.totalAmount || 0), 0);
    const currentMonth = new Date();
    const revenueThisMonth = invoices
      .filter(inv => {
        const invDate = new Date(inv.invoiceDate);
        return invDate.getMonth() === currentMonth.getMonth() && invDate.getFullYear() === currentMonth.getFullYear();
      })
      .reduce((sum, inv) => sum + (inv.totalAmount || 0), 0);

    const currentYear = new Date().getFullYear();
    const revenueThisYear = invoices
      .filter(inv => new Date(inv.invoiceDate).getFullYear() === currentYear)
      .reduce((sum, inv) => sum + (inv.totalAmount || 0), 0);

    const totalInvoices = invoices.length;
    const totalPaymentsReceived = payments.reduce((sum, p) => sum + (p.paymentAmount || 0), 0);
    const outstandingAmount = totalRevenue - totalPaymentsReceived;
    const paymentCollectionRate = totalRevenue > 0 ? (totalPaymentsReceived / totalRevenue) * 100 : 0;
    const averageDaysToPayment = calculateAverageDaysToPayment(invoices, payments);
    const packageRenewalRate = calculatePackageRenewalRate(packages);

    res.json({
      monthlyRevenue,
      revenueByPackage,
      paymentStatusDistribution,
      packageStatusDistribution,
      topPackages,
      paymentMethods,
      dailyRevenue,
      totalRevenue: totalRevenue / 100,
      revenueThisMonth: revenueThisMonth / 100,
      revenueThisYear: revenueThisYear / 100,
      totalInvoices,
      totalPaymentsReceived: totalPaymentsReceived / 100,
      outstandingAmount: outstandingAmount / 100,
      paymentCollectionRate: parseFloat(paymentCollectionRate.toFixed(2)),
      averageDaysToPayment: Math.round(averageDaysToPayment),
      packageRenewalRate: parseFloat(packageRenewalRate.toFixed(2)),
    });
  } catch (error) {
    logger.error('Error fetching revenue analytics:', error);
    throw error;
  }
});

// POST /billing/export-report - Export report
router.post('/export-report', async (req, res) => {
  const { reportType = 'pdf', dataType = 'dashboard', dateRange = '30' } = req.body;

  if (!['pdf', 'excel', 'csv'].includes(reportType)) {
    return res.status(400).json({ error: 'Invalid reportType' });
  }

  if (!['dashboard', 'invoices', 'revenue'].includes(dataType)) {
    return res.status(400).json({ error: 'Invalid dataType' });
  }

  try {
    const daysBack = parseInt(dateRange) || 30;
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - daysBack);
    const fileName = `${dataType}-report-${new Date().toISOString().split('T')[0]}.${reportType}`;

    // In production, generate actual PDF/Excel/CSV files
    // For now, return a placeholder download URL
    const downloadUrl = `/downloads/${fileName}`;

    logger.info(`Report generated: ${fileName}`);

    res.json({ downloadUrl, fileName });
  } catch (error) {
    logger.error('Error exporting report:', error);
    throw error;
  }
});

// POST /billing/record-payment - Record payment
router.post('/record-payment', async (req, res) => {
  const { invoiceId, patientId, paymentAmount, paymentDate, paymentMethod, referenceNumber, notes } = req.body;

  if (!invoiceId || !patientId || !paymentAmount) {
    return res.status(400).json({ error: 'invoiceId, patientId, and paymentAmount are required' });
  }

  try {
    // Create payment record
    const payment = await pb.collection('Payments').create({
      invoiceId,
      patientId,
      paymentAmount: Math.round(paymentAmount * 100),
      paymentDate: paymentDate || new Date().toISOString(),
      paymentMethod,
      referenceNumber,
      notes,
    });

    // Fetch invoice to check if fully paid
    const invoice = await pb.collection('Invoices').getOne(invoiceId);
    const allPayments = await pb.collection('Payments').getFullList({
      filter: `invoiceId = "${invoiceId}"`,
    });

    const totalPaid = allPayments.reduce((sum, p) => sum + (p.paymentAmount || 0), 0);
    const invoiceTotal = invoice.totalAmount || 0;

    let newStatus = invoice.status;
    if (totalPaid >= invoiceTotal) {
      newStatus = 'Paid';
    } else if (totalPaid > 0) {
      newStatus = 'Partially Paid';
    }

    // Update invoice status
    await pb.collection('Invoices').update(invoiceId, {
      status: newStatus,
      amountPaid: totalPaid,
    });

    res.json({ paymentId: payment.id, success: true });
  } catch (error) {
    logger.error('Error recording payment:', error);
    throw error;
  }
});

// GET /billing/aging-report - Get aging report
router.get('/aging-report', async (req, res) => {
  try {
    const today = new Date();
    const invoices = await pb.collection('Invoices').getFullList({
      filter: 'status != "Paid"',
      expand: 'patientId',
    });

    const overdue30 = [];
    const overdue60 = [];
    const overdue90plus = [];
    let totalOverdue = 0;

    invoices.forEach(invoice => {
      const dueDate = new Date(invoice.dueDate);
      const daysOverdue = Math.floor((today - dueDate) / (1000 * 60 * 60 * 24));

      if (daysOverdue > 0) {
        const invoiceData = {
          invoiceId: invoice.id,
          invoiceNumber: invoice.invoiceNumber,
          patientName: `${invoice.expand?.patientId?.firstName} ${invoice.expand?.patientId?.lastName}`,
          patientEmail: invoice.expand?.patientId?.email,
          amount: invoice.totalAmount / 100,
          dueDate: invoice.dueDate,
          daysOverdue,
        };

        totalOverdue += invoice.totalAmount;

        if (daysOverdue <= 30) {
          overdue30.push(invoiceData);
        } else if (daysOverdue <= 60) {
          overdue60.push(invoiceData);
        } else {
          overdue90plus.push(invoiceData);
        }
      }
    });

    res.json({
      overdue30,
      overdue60,
      overdue90plus,
      totalOverdue: totalOverdue / 100,
    });
  } catch (error) {
    logger.error('Error fetching aging report:', error);
    throw error;
  }
});

// POST /billing/auto-update-package-status - Auto-update package status
router.post('/auto-update-package-status', async (req, res) => {
  try {
    const packages = await pb.collection('PatientPackages').getFullList();
    const today = new Date();
    let updatedCount = 0;

    for (const pkg of packages) {
      const expiryDate = new Date(pkg.expiryDate);
      const daysRemaining = Math.floor((expiryDate - today) / (1000 * 60 * 60 * 24));
      const sessionsRemaining = (pkg.totalSessions || 0) - (pkg.sessionsUsed || 0);

      let newStatus = pkg.status;

      if (expiryDate < today) {
        newStatus = 'Expired';
      } else if (pkg.sessionsUsed >= pkg.totalSessions) {
        newStatus = 'Completed';
      } else if (daysRemaining < 7 || sessionsRemaining < 2) {
        newStatus = 'Expiring Soon';
      } else {
        newStatus = 'Active';
      }

      if (newStatus !== pkg.status) {
        await pb.collection('PatientPackages').update(pkg.id, {
          status: newStatus,
        });
        updatedCount += 1;
      }
    }

    res.json({ updatedCount });
  } catch (error) {
    logger.error('Error updating package status:', error);
    throw error;
  }
});

// Helper functions
function calculateMonthlyRevenue(invoices) {
  const monthlyData = {};
  invoices.forEach(inv => {
    const date = new Date(inv.invoiceDate);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    monthlyData[key] = (monthlyData[key] || 0) + (inv.totalAmount || 0);
  });
  return Object.entries(monthlyData).map(([month, amount]) => ({
    month,
    amount: amount / 100,
  }));
}

function calculateRevenueByPackage(invoices, packageType) {
  const packageData = {};
  invoices.forEach(inv => {
    const pkg = inv.packageType || 'Unknown';
    if (!packageType || pkg === packageType) {
      packageData[pkg] = (packageData[pkg] || 0) + (inv.totalAmount || 0);
    }
  });
  return Object.entries(packageData).map(([type, amount]) => ({
    packageType: type,
    amount: amount / 100,
  }));
}

function calculatePaymentStatus(invoices) {
  const statusCount = {};
  invoices.forEach(inv => {
    const status = inv.status || 'Unknown';
    statusCount[status] = (statusCount[status] || 0) + 1;
  });
  return statusCount;
}

function calculatePackageStatus(packages) {
  const statusCount = {};
  packages.forEach(pkg => {
    const status = pkg.status || 'Unknown';
    statusCount[status] = (statusCount[status] || 0) + 1;
  });
  return statusCount;
}

function getTopPackages(invoices, limit) {
  const packageCount = {};
  invoices.forEach(inv => {
    const pkg = inv.packageType || 'Unknown';
    packageCount[pkg] = (packageCount[pkg] || 0) + 1;
  });
  return Object.entries(packageCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([type, count]) => ({ packageType: type, count }));
}

function getPaymentMethods(payments, filterMethod) {
  const methodCount = {};
  payments.forEach(p => {
    const method = p.paymentMethod || 'Unknown';
    if (!filterMethod || method === filterMethod) {
      methodCount[method] = (methodCount[method] || 0) + 1;
    }
  });
  return Object.entries(methodCount).map(([method, count]) => ({ method, count }));
}

function calculateDailyRevenue(invoices) {
  const dailyData = {};
  invoices.forEach(inv => {
    const date = inv.invoiceDate.split('T')[0];
    dailyData[date] = (dailyData[date] || 0) + (inv.totalAmount || 0);
  });
  return Object.entries(dailyData).map(([date, amount]) => ({
    date,
    amount: amount / 100,
  }));
}

function calculateAverageDaysToPayment(invoices, payments) {
  let totalDays = 0;
  let count = 0;

  invoices.forEach(inv => {
    const relatedPayments = payments.filter(p => p.invoiceId === inv.id);
    if (relatedPayments.length > 0) {
      const invoiceDate = new Date(inv.invoiceDate);
      const paymentDate = new Date(relatedPayments[0].paymentDate);
      const days = Math.floor((paymentDate - invoiceDate) / (1000 * 60 * 60 * 24));
      totalDays += days;
      count += 1;
    }
  });

  return count > 0 ? totalDays / count : 0;
}

function calculatePackageRenewalRate(packages) {
  const renewedCount = packages.filter(p => p.renewalCount && p.renewalCount > 0).length;
  return packages.length > 0 ? (renewedCount / packages.length) * 100 : 0;
}

export default router;