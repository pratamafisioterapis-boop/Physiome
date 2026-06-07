/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("packages");
  collection.indexes.push("CREATE INDEX idx_packages_clinic_id ON packages (clinic_id)");
  return app.save(collection);
}, (app) => {
  try {
  const collection = app.findCollectionByNameOrId("packages");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_packages_clinic_id"));
  return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
