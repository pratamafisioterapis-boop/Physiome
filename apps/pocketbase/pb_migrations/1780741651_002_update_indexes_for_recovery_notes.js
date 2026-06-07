/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("recovery_notes");
  collection.indexes.push("CREATE INDEX idx_recovery_notes_patient_id ON recovery_notes (patient_id)");
  return app.save(collection);
}, (app) => {
  try {
  const collection = app.findCollectionByNameOrId("recovery_notes");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_recovery_notes_patient_id"));
  return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
