/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("patient_achievements");
  collection.indexes.push("CREATE INDEX idx_patient_achievements_patient_id ON patient_achievements (patient_id)");
  return app.save(collection);
}, (app) => {
  try {
  const collection = app.findCollectionByNameOrId("patient_achievements");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_patient_achievements_patient_id"));
  return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
