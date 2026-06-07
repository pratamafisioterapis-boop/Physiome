/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("AssignedAssessments");

  const existing = collection.fields.getByName("clinical_indication");
  if (existing) {
    if (existing.type === "text") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("clinical_indication"); // exists with wrong type, remove first
  }

  collection.fields.add(new TextField({
    name: "clinical_indication",
    required: false
  }));

  return app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("AssignedAssessments");
    collection.fields.removeByName("clinical_indication");
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
