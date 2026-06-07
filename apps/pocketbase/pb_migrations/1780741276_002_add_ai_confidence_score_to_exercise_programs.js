/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("exercise_programs");

  const existing = collection.fields.getByName("ai_confidence_score");
  if (existing) {
    if (existing.type === "number") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("ai_confidence_score"); // exists with wrong type, remove first
  }

  collection.fields.add(new NumberField({
    name: "ai_confidence_score",
    required: false,
    min: 0,
    max: 100
  }));

  return app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("exercise_programs");
    collection.fields.removeByName("ai_confidence_score");
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
