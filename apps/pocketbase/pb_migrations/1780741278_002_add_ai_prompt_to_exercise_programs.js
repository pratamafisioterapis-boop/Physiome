/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("exercise_programs");

  const existing = collection.fields.getByName("ai_prompt");
  if (existing) {
    if (existing.type === "text") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("ai_prompt"); // exists with wrong type, remove first
  }

  collection.fields.add(new TextField({
    name: "ai_prompt",
    required: false
  }));

  return app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("exercise_programs");
    collection.fields.removeByName("ai_prompt");
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
