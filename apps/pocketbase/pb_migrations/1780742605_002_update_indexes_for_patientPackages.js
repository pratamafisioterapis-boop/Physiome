/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("patientPackages");
  collection.indexes.push("CREATE INDEX idx_patientPackages_patient_id ON patientPackages (patient_id)");
  collection.indexes.push("CREATE INDEX idx_patientPackages_clinic_id ON patientPackages (clinic_id)");
  return app.save(collection);
}, (app) => {
  try {
  const collection = app.findCollectionByNameOrId("patientPackages");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_patientPackages_patient_id"));
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_patientPackages_clinic_id"));
  return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
