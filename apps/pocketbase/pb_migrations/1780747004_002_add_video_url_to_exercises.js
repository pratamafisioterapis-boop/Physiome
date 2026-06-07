/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("exercises");

  const existing = collection.fields.getByName("video_url");
  if (existing) {
    if (existing.type === "file") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("video_url"); // exists with wrong type, remove first
  }

  collection.fields.add(new FileField({
    name: "video_url",
    required: false,
    maxSelect: 1,
    maxSize: 104857600
  }));

  return app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("exercises");
    collection.fields.removeByName("video_url");
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
