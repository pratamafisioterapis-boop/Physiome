/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": "@request.auth.role = 'therapist' && clinic_id = @request.auth.clinic_id",
    "deleteRule": "@request.auth.role = 'therapist' && therapist_id = @request.auth.id && clinic_id = @request.auth.clinic_id",
    "fields":     [
          {
                "autogeneratePattern": "[a-z0-9]{15}",
                "hidden": false,
                "id": "text3649192312",
                "max": 15,
                "min": 15,
                "name": "id",
                "pattern": "^[a-z0-9]+$",
                "presentable": false,
                "primaryKey": true,
                "required": true,
                "system": true,
                "type": "text"
          },
          {
                "hidden": false,
                "id": "text8298996684",
                "name": "therapist_id",
                "presentable": false,
                "primaryKey": false,
                "required": true,
                "system": false,
                "type": "text",
                "autogeneratePattern": "",
                "max": 0,
                "min": 0,
                "pattern": ""
          },
          {
                "hidden": false,
                "id": "text5073767011",
                "name": "template_name",
                "presentable": false,
                "primaryKey": false,
                "required": true,
                "system": false,
                "type": "text",
                "autogeneratePattern": "",
                "max": 0,
                "min": 0,
                "pattern": ""
          },
          {
                "hidden": false,
                "id": "json8082505684",
                "name": "template_config",
                "presentable": false,
                "primaryKey": false,
                "required": true,
                "system": false,
                "type": "json",
                "maxSize": 0
          },
          {
                "hidden": false,
                "id": "select7305125514",
                "name": "category",
                "presentable": false,
                "primaryKey": false,
                "required": false,
                "system": false,
                "type": "select",
                "maxSelect": 1,
                "values": [
                      "Neck Mobility",
                      "ACL Rehab",
                      "Stroke Rehab",
                      "Balance Training",
                      "Post Operative",
                      "Low Back Pain",
                      "Frozen Shoulder",
                      "Custom"
                ]
          },
          {
                "hidden": false,
                "id": "text8974024011",
                "name": "clinic_id",
                "presentable": false,
                "primaryKey": false,
                "required": true,
                "system": false,
                "type": "text",
                "autogeneratePattern": "",
                "max": 0,
                "min": 0,
                "pattern": ""
          },
          {
                "hidden": false,
                "id": "autodate6338690883",
                "name": "created",
                "onCreate": true,
                "onUpdate": false,
                "presentable": false,
                "system": false,
                "type": "autodate"
          },
          {
                "hidden": false,
                "id": "autodate2321820055",
                "name": "updated",
                "onCreate": true,
                "onUpdate": true,
                "presentable": false,
                "system": false,
                "type": "autodate"
          }
    ],
    "id": "pbc_6915229381",
    "indexes": [],
    "listRule": "clinic_id = @request.auth.clinic_id",
    "name": "timer_templates",
    "system": false,
    "type": "base",
    "updateRule": "@request.auth.role = 'therapist' && therapist_id = @request.auth.id && clinic_id = @request.auth.clinic_id",
    "viewRule": "clinic_id = @request.auth.clinic_id"
  });

  try {
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("Collection name must be unique")) {
      console.log("Collection already exists, skipping");
      return;
    }
    throw e;
  }
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("pbc_6915229381");
    return app.delete(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
