/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("program_templates");
  collection.listRule = "is_public = true || created_by = @request.auth.id || @request.auth.role = \"admin\"";
  collection.viewRule = "is_public = true || created_by = @request.auth.id || @request.auth.role = \"admin\"";
  collection.createRule = "@request.auth.role = \"therapist\" || @request.auth.role = \"admin\"";
  collection.updateRule = "created_by = @request.auth.id || @request.auth.role = \"admin\"";
  collection.deleteRule = "created_by = @request.auth.id || @request.auth.role = \"admin\"";
  return app.save(collection);
}, (app) => {
  try {
  const collection = app.findCollectionByNameOrId("program_templates");
  collection.listRule = "clinic_id = @request.auth.clinic_id";
  collection.viewRule = "clinic_id = @request.auth.clinic_id";
  collection.createRule = "clinic_id = @request.auth.clinic_id";
  collection.updateRule = "clinic_id = @request.auth.clinic_id";
  collection.deleteRule = "clinic_id = @request.auth.clinic_id";
  return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
