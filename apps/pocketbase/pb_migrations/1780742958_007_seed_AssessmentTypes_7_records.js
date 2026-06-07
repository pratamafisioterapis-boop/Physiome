/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("AssessmentTypes");

  const record0 = new Record(collection);
    record0.set("name", "NDI");
    record0.set("description", "Neck Disability Index - Measures functional limitation in patients with neck pain");
    record0.set("questions_count", 10);
    record0.set("total_items", 10);
    record0.set("scale_max", 50);
    record0.set("estimated_time", 5);
    record0.set("active", true);
    record0.set("clinic_id", "system");
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
    record1.set("description", "Oswestry Disability Index - Measures functional limitation in patients with low back pain");
    record1.set("questions_count", 10);
    record1.set("total_items", 10);
    record1.set("scale_max", 50);
    record1.set("estimated_time", 5);
    record1.set("active", true);
    record1.set("clinic_id", "system");
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
    record2.set("description", "Disabilities of the Arm, Shoulder and Hand - Measures upper extremity function");
    record2.set("questions_count", 30);
    record2.set("total_items", 30);
    record2.set("scale_max", 150);
    record2.set("estimated_time", 10);
    record2.set("active", true);
    record2.set("clinic_id", "system");
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
    record3.set("description", "Lower Extremity Functional Scale - Measures lower extremity function");
    record3.set("questions_count", 20);
    record3.set("total_items", 20);
    record3.set("scale_max", 80);
    record3.set("estimated_time", 8);
    record3.set("active", true);
    record3.set("clinic_id", "system");
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
    record4.set("description", "Western Ontario and McMaster Universities Osteoarthritis Index - Measures knee and hip osteoarthritis");
    record4.set("questions_count", 24);
    record4.set("total_items", 24);
    record4.set("scale_max", 96);
    record4.set("estimated_time", 10);
    record4.set("active", true);
    record4.set("clinic_id", "system");
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
    record5.set("description", "Knee Injury and Osteoarthritis Outcome Score - Comprehensive knee assessment with subscales");
    record5.set("questions_count", 42);
    record5.set("total_items", 42);
    record5.set("scale_max", 100);
    record5.set("estimated_time", 15);
    record5.set("active", true);
    record5.set("clinic_id", "system");
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
    record6.set("description", "Hip Disability and Osteoarthritis Outcome Score - Comprehensive hip assessment with subscales");
    record6.set("questions_count", 40);
    record6.set("total_items", 40);
    record6.set("scale_max", 100);
    record6.set("estimated_time", 15);
    record6.set("active", true);
    record6.set("clinic_id", "system");
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
