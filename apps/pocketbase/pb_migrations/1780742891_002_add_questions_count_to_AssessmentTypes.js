/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("AssessmentTypes");

  const existing = collection.fields.getByName("questions_count");
  if (existing) {
    if (existing.type === "number") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("questions_count"); // exists with wrong type, remove first
  }

  collection.fields.add(new NumberField({
    name: "questions_count",
    required: true,
    min: 1
  }));

  return app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("AssessmentTypes");
    collection.fields.removeByName("questions_count");
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
