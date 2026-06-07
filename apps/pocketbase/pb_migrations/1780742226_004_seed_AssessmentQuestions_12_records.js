/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("AssessmentQuestions");

  const record0 = new Record(collection);
    record0.set("assessment_type", "WOMAC");
    record0.set("question_number", 1);
    record0.set("question_text", "Pain - Nocturnal pain: How much pain at night?");
    record0.set("response_type", "scale");
    record0.set("response_options", "{'scale': [0, 1, 2, 3, 4]}");
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
    record1.set("assessment_type", "WOMAC");
    record1.set("question_number", 2);
    record1.set("question_text", "Pain - Pain on standing: How much pain when standing?");
    record1.set("response_type", "scale");
    record1.set("response_options", "{'scale': [0, 1, 2, 3, 4]}");
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
    record2.set("assessment_type", "WOMAC");
    record2.set("question_number", 3);
    record2.set("question_text", "Pain - Pain on walking: How much pain when walking?");
    record2.set("response_type", "scale");
    record2.set("response_options", "{'scale': [0, 1, 2, 3, 4]}");
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
    record3.set("assessment_type", "WOMAC");
    record3.set("question_number", 4);
    record3.set("question_text", "Pain - Pain on stairs: How much pain on stairs?");
    record3.set("response_type", "scale");
    record3.set("response_options", "{'scale': [0, 1, 2, 3, 4]}");
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
    record4.set("assessment_type", "WOMAC");
    record4.set("question_number", 5);
    record4.set("question_text", "Pain - Pain in bed: How much pain in bed?");
    record4.set("response_type", "scale");
    record4.set("response_options", "{'scale': [0, 1, 2, 3, 4]}");
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
    record5.set("assessment_type", "WOMAC");
    record5.set("question_number", 6);
    record5.set("question_text", "Stiffness - Morning stiffness: How much morning stiffness?");
    record5.set("response_type", "scale");
    record5.set("response_options", "{'scale': [0, 1, 2, 3, 4]}");
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
    record6.set("assessment_type", "WOMAC");
    record6.set("question_number", 7);
    record6.set("question_text", "Stiffness - Stiffness after activity: How much stiffness after activity?");
    record6.set("response_type", "scale");
    record6.set("response_options", "{'scale': [0, 1, 2, 3, 4]}");
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
    record7.set("assessment_type", "WOMAC");
    record7.set("question_number", 8);
    record7.set("question_text", "Function - Descending stairs: How much difficulty descending stairs?");
    record7.set("response_type", "scale");
    record7.set("response_options", "{'scale': [0, 1, 2, 3, 4]}");
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
    record8.set("assessment_type", "WOMAC");
    record8.set("question_number", 9);
    record8.set("question_text", "Function - Ascending stairs: How much difficulty ascending stairs?");
    record8.set("response_type", "scale");
    record8.set("response_options", "{'scale': [0, 1, 2, 3, 4]}");
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
    record9.set("assessment_type", "WOMAC");
    record9.set("question_number", 10);
    record9.set("question_text", "Function - Rising from sitting: How much difficulty rising from sitting?");
    record9.set("response_type", "scale");
    record9.set("response_options", "{'scale': [0, 1, 2, 3, 4]}");
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
    record10.set("assessment_type", "WOMAC");
    record10.set("question_number", 11);
    record10.set("question_text", "Function - Standing: How much difficulty standing?");
    record10.set("response_type", "scale");
    record10.set("response_options", "{'scale': [0, 1, 2, 3, 4]}");
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
    record11.set("assessment_type", "WOMAC");
    record11.set("question_number", 12);
    record11.set("question_text", "Function - Bending to floor: How much difficulty bending to floor?");
    record11.set("response_type", "scale");
    record11.set("response_options", "{'scale': [0, 1, 2, 3, 4]}");
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
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})
