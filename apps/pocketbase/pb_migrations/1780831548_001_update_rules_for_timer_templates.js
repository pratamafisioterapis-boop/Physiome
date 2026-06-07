/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("timer_templates");
  collection.listRule = "therapist_id = @request.auth.id || @request.auth.role = \"admin\"";
  collection.viewRule = "therapist_id = @request.auth.id || @request.auth.role = \"admin\"";
  collection.createRule = "therapist_id = @request.auth.id";
  collection.updateRule = "therapist_id = @request.auth.id || @request.auth.role = \"admin\"";
  collection.deleteRule = "therapist_id = @request.auth.id || @request.auth.role = \"admin\"";
  return app.save(collection);
}, (app) => {
  try {
  const collection = app.findCollectionByNameOrId("timer_templates");
  collection.listRule = "clinic_id = @request.auth.clinic_id";
  collection.viewRule = "clinic_id = @request.auth.clinic_id";
  collection.createRule = "@request.auth.role = 'therapist' && clinic_id = @request.auth.clinic_id";
  collection.updateRule = "@request.auth.role = 'therapist' && therapist_id = @request.auth.id && clinic_id = @request.auth.clinic_id";
  collection.deleteRule = "@request.auth.role = 'therapist' && therapist_id = @request.auth.id && clinic_id = @request.auth.clinic_id";
  return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
