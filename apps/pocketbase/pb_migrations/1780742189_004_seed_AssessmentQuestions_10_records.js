/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("AssessmentQuestions");

  const record0 = new Record(collection);
    record0.set("assessment_type", "ODI");
    record0.set("question_number", 1);
    record0.set("question_text", "Pain Intensity: How would you rate your pain on a scale of 0-5?");
    record0.set("response_type", "scale");
    record0.set("response_options", "{'scale': [0, 1, 2, 3, 4, 5]}");
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
    record1.set("assessment_type", "ODI");
    record1.set("question_number", 2);
    record1.set("question_text", "Personal Care (washing, dressing): How much difficulty do you have with personal care?");
    record1.set("response_type", "scale");
    record1.set("response_options", "{'scale': [0, 1, 2, 3, 4, 5]}");
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
    record2.set("assessment_type", "ODI");
    record2.set("question_number", 3);
    record2.set("question_text", "Lifting: How much difficulty do you have lifting objects?");
    record2.set("response_type", "scale");
    record2.set("response_options", "{'scale': [0, 1, 2, 3, 4, 5]}");
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
    record3.set("assessment_type", "ODI");
    record3.set("question_number", 4);
    record3.set("question_text", "Walking: How much difficulty do you have walking?");
    record3.set("response_type", "scale");
    record3.set("response_options", "{'scale': [0, 1, 2, 3, 4, 5]}");
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
    record4.set("assessment_type", "ODI");
    record4.set("question_number", 5);
    record4.set("question_text", "Sitting: How much difficulty do you have sitting?");
    record4.set("response_type", "scale");
    record4.set("response_options", "{'scale': [0, 1, 2, 3, 4, 5]}");
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
    record5.set("assessment_type", "ODI");
    record5.set("question_number", 6);
    record5.set("question_text", "Standing: How much difficulty do you have standing?");
    record5.set("response_type", "scale");
    record5.set("response_options", "{'scale': [0, 1, 2, 3, 4, 5]}");
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
    record6.set("assessment_type", "ODI");
    record6.set("question_number", 7);
    record6.set("question_text", "Sleeping: How much difficulty do you have sleeping?");
    record6.set("response_type", "scale");
    record6.set("response_options", "{'scale': [0, 1, 2, 3, 4, 5]}");
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

  const record7 = new Record(collection);
    record7.set("assessment_type", "ODI");
    record7.set("question_number", 8);
    record7.set("question_text", "Social Life: How much difficulty do you have with social activities?");
    record7.set("response_type", "scale");
    record7.set("response_options", "{'scale': [0, 1, 2, 3, 4, 5]}");
    record7.set("clinic_id", "default");
  try {
    app.save(record7);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record8 = new Record(collection);
    record8.set("assessment_type", "ODI");
    record8.set("question_number", 9);
    record8.set("question_text", "Traveling: How much difficulty do you have traveling?");
    record8.set("response_type", "scale");
    record8.set("response_options", "{'scale': [0, 1, 2, 3, 4, 5]}");
    record8.set("clinic_id", "default");
  try {
    app.save(record8);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record9 = new Record(collection);
    record9.set("assessment_type", "ODI");
    record9.set("question_number", 10);
    record9.set("question_text", "Changing Degree of Intensity of Pain: How much does your pain change throughout the day?");
    record9.set("response_type", "scale");
    record9.set("response_options", "{'scale': [0, 1, 2, 3, 4, 5]}");
    record9.set("clinic_id", "default");
  try {
    app.save(record9);
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
