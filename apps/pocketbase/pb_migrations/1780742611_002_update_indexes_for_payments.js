/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("payments");
  collection.indexes.push("CREATE INDEX idx_payments_clinic_id ON payments (clinic_id)");
  collection.indexes.push("CREATE INDEX idx_payments_invoice_id ON payments (invoice_id)");
  collection.indexes.push("CREATE INDEX idx_payments_patient_id ON payments (patient_id)");
  return app.save(collection);
}, (app) => {
  try {
  const collection = app.findCollectionByNameOrId("payments");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_payments_clinic_id"));
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_payments_invoice_id"));
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_payments_patient_id"));
  return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
