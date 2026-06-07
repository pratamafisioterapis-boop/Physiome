/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("exercise_statistics");
  collection.indexes.push("CREATE INDEX idx_exercise_statistics_exercise_id ON exercise_statistics (exercise_id)");
  collection.indexes.push("CREATE INDEX idx_exercise_statistics_clinic_id ON exercise_statistics (clinic_id)");
  return app.save(collection);
}, (app) => {
  try {
  const collection = app.findCollectionByNameOrId("exercise_statistics");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_exercise_statistics_exercise_id"));
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_exercise_statistics_clinic_id"));
  return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
