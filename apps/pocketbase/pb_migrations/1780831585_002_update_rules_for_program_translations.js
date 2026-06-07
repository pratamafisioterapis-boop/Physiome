/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("program_translations");
  collection.listRule = "@request.auth.id != \"\"";
  collection.viewRule = "@request.auth.id != \"\"";
  collection.createRule = "@request.auth.role = \"therapist\" || @request.auth.role = \"admin\"";
  collection.updateRule = "@request.auth.role = \"therapist\" || @request.auth.role = \"admin\"";
  return app.save(collection);
}, (app) => {
  try {
  const collection = app.findCollectionByNameOrId("program_translations");
  collection.listRule = "clinic_id = @request.auth.clinic_id";
  collection.viewRule = "clinic_id = @request.auth.clinic_id";
  collection.createRule = "@request.auth.role = 'therapist' && clinic_id = @request.auth.clinic_id";
  collection.updateRule = "@request.auth.role = 'therapist' && clinic_id = @request.auth.clinic_id";
  return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
