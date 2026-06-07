/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("AssignedAssessments");
  collection.listRule = "clinic_id = @request.auth.clinic_id || patient_id = @request.auth.id";
  collection.viewRule = "clinic_id = @request.auth.clinic_id || patient_id = @request.auth.id";
  collection.createRule = "therapist_id = @request.auth.id && clinic_id = @request.auth.clinic_id";
  collection.updateRule = "therapist_id = @request.auth.id && clinic_id = @request.auth.clinic_id";
  collection.deleteRule = "therapist_id = @request.auth.id && clinic_id = @request.auth.clinic_id";
  return app.save(collection);
}, (app) => {
  try {
  const collection = app.findCollectionByNameOrId("AssignedAssessments");
  collection.listRule = "clinic_id = @request.auth.clinic_id || patient_id = @request.auth.id";
  collection.viewRule = "clinic_id = @request.auth.clinic_id || patient_id = @request.auth.id";
  collection.createRule = "clinic_id = @request.auth.clinic_id";
  collection.updateRule = "clinic_id = @request.auth.clinic_id || patient_id = @request.auth.id";
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
