/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("AssessmentQuestions");

  const record0 = new Record(collection);
    record0.set("assessment_type", "DASH");
    record0.set("question_number", 1);
    record0.set("question_text", "Opening a tight or new jar: Is this difficult or impossible?");
    record0.set("response_type", "scale");
    record0.set("response_options", "{'scale': [1, 2, 3, 4, 5]}");
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
    record1.set("assessment_type", "DASH");
    record1.set("question_number", 2);
    record1.set("question_text", "Writing: Is this difficult or impossible?");
    record1.set("response_type", "scale");
    record1.set("response_options", "{'scale': [1, 2, 3, 4, 5]}");
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
    record2.set("assessment_type", "DASH");
    record2.set("question_number", 3);
    record2.set("question_text", "Turning a key: Is this difficult or impossible?");
    record2.set("response_type", "scale");
    record2.set("response_options", "{'scale': [1, 2, 3, 4, 5]}");
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
    record3.set("assessment_type", "DASH");
    record3.set("question_number", 4);
    record3.set("question_text", "Preparing a meal: Is this difficult or impossible?");
    record3.set("response_type", "scale");
    record3.set("response_options", "{'scale': [1, 2, 3, 4, 5]}");
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
    record4.set("assessment_type", "DASH");
    record4.set("question_number", 5);
    record4.set("question_text", "Pushing open a heavy door: Is this difficult or impossible?");
    record4.set("response_type", "scale");
    record4.set("response_options", "{'scale': [1, 2, 3, 4, 5]}");
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
    record5.set("assessment_type", "DASH");
    record5.set("question_number", 6);
    record5.set("question_text", "Placing an object on a shelf above your head: Is this difficult or impossible?");
    record5.set("response_type", "scale");
    record5.set("response_options", "{'scale': [1, 2, 3, 4, 5]}");
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
    record6.set("assessment_type", "DASH");
    record6.set("question_number", 7);
    record6.set("question_text", "Doing laundry: Is this difficult or impossible?");
    record6.set("response_type", "scale");
    record6.set("response_options", "{'scale': [1, 2, 3, 4, 5]}");
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
    record7.set("assessment_type", "DASH");
    record7.set("question_number", 8);
    record7.set("question_text", "Bathing and dressing: Is this difficult or impossible?");
    record7.set("response_type", "scale");
    record7.set("response_options", "{'scale': [1, 2, 3, 4, 5]}");
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
    record8.set("assessment_type", "DASH");
    record8.set("question_number", 9);
    record8.set("question_text", "Fastening buttons: Is this difficult or impossible?");
    record8.set("response_type", "scale");
    record8.set("response_options", "{'scale': [1, 2, 3, 4, 5]}");
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
    record9.set("assessment_type", "DASH");
    record9.set("question_number", 10);
    record9.set("question_text", "Cutting meat using a knife in your dominant hand: Is this difficult or impossible?");
    record9.set("response_type", "scale");
    record9.set("response_options", "{'scale': [1, 2, 3, 4, 5]}");
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

  const record10 = new Record(collection);
    record10.set("assessment_type", "DASH");
    record10.set("question_number", 11);
    record10.set("question_text", "Carrying a bag or object weighing 10 lbs: Is this difficult or impossible?");
    record10.set("response_type", "scale");
    record10.set("response_options", "{'scale': [1, 2, 3, 4, 5]}");
    record10.set("clinic_id", "default");
  try {
    app.save(record10);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record11 = new Record(collection);
    record11.set("assessment_type", "DASH");
    record11.set("question_number", 12);
    record11.set("question_text", "Picking up a coin from a table: Is this difficult or impossible?");
    record11.set("response_type", "scale");
    record11.set("response_options", "{'scale': [1, 2, 3, 4, 5]}");
    record11.set("clinic_id", "default");
  try {
    app.save(record11);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record12 = new Record(collection);
    record12.set("assessment_type", "DASH");
    record12.set("question_number", 13);
    record12.set("question_text", "Answering phone and talking: Is this difficult or impossible?");
    record12.set("response_type", "scale");
    record12.set("response_options", "{'scale': [1, 2, 3, 4, 5]}");
    record12.set("clinic_id", "default");
  try {
    app.save(record12);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record13 = new Record(collection);
    record13.set("assessment_type", "DASH");
    record13.set("question_number", 14);
    record13.set("question_text", "Going shopping for groceries: Is this difficult or impossible?");
    record13.set("response_type", "scale");
    record13.set("response_options", "{'scale': [1, 2, 3, 4, 5]}");
    record13.set("clinic_id", "default");
  try {
    app.save(record13);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record14 = new Record(collection);
    record14.set("assessment_type", "DASH");
    record14.set("question_number", 15);
    record14.set("question_text", "Sleeping: Is this difficult or impossible?");
    record14.set("response_type", "scale");
    record14.set("response_options", "{'scale': [1, 2, 3, 4, 5]}");
    record14.set("clinic_id", "default");
  try {
    app.save(record14);
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
