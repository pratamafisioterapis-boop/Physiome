/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("exercises");
  collection.indexes.push("CREATE INDEX idx_exercises_clinic_id ON exercises (clinic_id)");
  collection.indexes.push("CREATE INDEX idx_exercises_name ON exercises (name)");
  collection.indexes.push("CREATE INDEX idx_exercises_body_region ON exercises (body_region)");
  collection.indexes.push("CREATE INDEX idx_exercises_category ON exercises (category)");
  return app.save(collection);
}, (app) => {
  try {
  const collection = app.findCollectionByNameOrId("exercises");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_exercises_clinic_id"));
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_exercises_name"));
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_exercises_body_region"));
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_exercises_category"));
  return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
