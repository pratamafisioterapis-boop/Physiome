
import React, { useState } from 'react';
import { Calculator, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

const ROICalculator = () => {
  const [therapists, setTherapists] = useState(3);
  const [patients, setPatients] = useState(150);
  const [revenue, setRevenue] = useState(400000);

  // Calculations
  const hoursSavedPerWeek = therapists * 8; // 8 hours saved per therapist per week
  const monthlyRevenueIncrease = patients * revenue * 0.15; // 15% increase in revenue due to better retention/efficiency
  const annualROI = monthlyRevenueIncrease * 12;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
  };

  return (
    <div className="bg-card rounded-3xl shadow-soft border border-border overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* Inputs */}
        <div className="p-8 md:p-12 bg-muted/30">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <Calculator className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">Kalkulator ROI</h3>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label className="text-base">Jumlah Terapis</Label>
                <span className="font-bold text-primary">{therapists} Orang</span>
              </div>
              <Slider 
                value={[therapists]} 
                onValueChange={(val) => setTherapists(val[0])} 
                max={20} min={1} step={1} 
                className="py-4"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <Label className="text-base">Pasien Aktif per Bulan</Label>
                <span className="font-bold text-primary">{patients} Pasien</span>
              </div>
              <Slider 
                value={[patients]} 
                onValueChange={(val) => setPatients(val[0])} 
                max={1000} min={10} step={10} 
                className="py-4"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <Label className="text-base">Rata-rata Pendapatan per Pasien</Label>
                <span className="font-bold text-primary">{formatCurrency(revenue)}</span>
              </div>
              <Slider 
                value={[revenue]} 
                onValueChange={(val) => setRevenue(val[0])} 
                max={2000000} min={100000} step={50000} 
                className="py-4"
              />
            </div>
          </div>
        </div>

        {/* Outputs */}
        <div className="p-8 md:p-12 bg-secondary text-secondary-foreground flex flex-col justify-center">
          <h4 className="text-xl font-medium mb-8 text-secondary-foreground/80">Estimasi Dampak Penggunaan Physiome</h4>
          
          <div className="space-y-6">
            <Card className="bg-white/10 border-none text-secondary-foreground">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-secondary-foreground/70 mb-1">Efisiensi Waktu (Admin & Dokumentasi)</p>
                  <p className="text-2xl font-bold">{hoursSavedPerWeek} Jam / Minggu</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-none text-secondary-foreground">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center text-success shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-secondary-foreground/70 mb-1">Potensi Peningkatan Pendapatan</p>
                  <p className="text-2xl font-bold">{formatCurrency(monthlyRevenueIncrease)} / Bulan</p>
                </div>
              </CardContent>
            </Card>

            <div className="pt-6 mt-6 border-t border-white/10">
              <p className="text-sm text-secondary-foreground/70 mb-2">Estimasi Nilai Tambah Tahunan (ROI)</p>
              <p className="text-4xl md:text-5xl font-extrabold text-accent flex items-center gap-2">
                {formatCurrency(annualROI)}
              </p>
              <p className="text-xs text-secondary-foreground/50 mt-4">
                *Kalkulasi didasarkan pada rata-rata peningkatan retensi pasien 15% dan penghematan waktu dokumentasi 8 jam/terapis/minggu.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ROICalculator;
