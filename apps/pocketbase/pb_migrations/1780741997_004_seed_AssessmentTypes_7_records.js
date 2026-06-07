/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("AssessmentTypes");

  const record0 = new Record(collection);
    record0.set("name", "NDI");
    record0.set("description", "Neck Disability Index - measures functional limitation in patients with neck pain");
    record0.set("total_items", 10);
    record0.set("scale_min", 0);
    record0.set("scale_max", 50);
    record0.set("scoring_formula", "Sum of all items (0-50), percentage = (raw_score/50)*100");
    record0.set("clinic_id", "default");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.set("name", "ODI");
    record1.set("description", "Oswestry Disability Index - measures functional limitation in patients with low back pain");
    record1.set("total_items", 10);
    record1.set("scale_min", 0);
    record1.set("scale_max", 50);
    record1.set("scoring_formula", "Sum of all items (0-50), percentage = (raw_score/50)*100");
    record1.set("clinic_id", "default");
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.set("name", "DASH");
    record2.set("description", "Disabilities of the Arm, Shoulder and Hand - measures upper extremity function");
    record2.set("total_items", 30);
    record2.set("scale_min", 0);
    record2.set("scale_max", 100);
    record2.set("scoring_formula", "[(sum of responses/30)-1]*25, range 0-100");
    record2.set("clinic_id", "default");
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.set("name", "LEFS");
    record3.set("description", "Lower Extremity Functional Scale - measures lower extremity function");
    record3.set("total_items", 20);
    record3.set("scale_min", 0);
    record3.set("scale_max", 80);
    record3.set("scoring_formula", "Sum of all items (0-80), percentage = (raw_score/80)*100");
    record3.set("clinic_id", "default");
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.set("name", "WOMAC");
    record4.set("description", "Western Ontario and McMaster Universities Osteoarthritis Index - measures knee/hip osteoarthritis");
    record4.set("total_items", 24);
    record4.set("scale_min", 0);
    record4.set("scale_max", 96);
    record4.set("scoring_formula", "Sum of all items (0-96), percentage = (raw_score/96)*100");
    record4.set("clinic_id", "default");
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record5 = new Record(collection);
    record5.set("name", "KOOS");
    record5.set("description", "Knee Injury and Osteoarthritis Outcome Score - comprehensive knee assessment");
    record5.set("total_items", 42);
    record5.set("scale_min", 0);
    record5.set("scale_max", 100);
    record5.set("scoring_formula", "Subscale scoring: Pain (0-100), Symptoms (0-100), ADL (0-100), Sport (0-100), QOL (0-100)");
    record5.set("clinic_id", "default");
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record6 = new Record(collection);
    record6.set("name", "HOOS");
    record6.set("description", "Hip Disability and Osteoarthritis Outcome Score - comprehensive hip assessment");
    record6.set("total_items", 40);
    record6.set("scale_min", 0);
    record6.set("scale_max", 100);
    record6.set("scoring_formula", "Subscale scoring: Pain (0-100), Symptoms (0-100), ADL (0-100), Sport (0-100), QOL (0-100)");
    record6.set("clinic_id", "default");
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})
