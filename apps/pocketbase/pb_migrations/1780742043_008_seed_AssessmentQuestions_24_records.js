/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("AssessmentQuestions");

  const record0 = new Record(collection);
    record0.set("assessment_type", "WOMAC");
    record0.set("question_number", 1);
    record0.set("question_text", "Pain - Walking on flat surface");
    record0.set("response_type", "scale");
    record0.set("response_options", "{'scale': '0-4'}");
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
    record1.set("question_text", "Pain - Going up or down stairs");
    record1.set("response_type", "scale");
    record1.set("response_options", "{'scale': '0-4'}");
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
    record2.set("question_text", "Pain - At night while in bed");
    record2.set("response_type", "scale");
    record2.set("response_options", "{'scale': '0-4'}");
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
    record3.set("question_text", "Pain - Sitting or lying");
    record3.set("response_type", "scale");
    record3.set("response_options", "{'scale': '0-4'}");
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
    record4.set("question_text", "Pain - Standing upright");
    record4.set("response_type", "scale");
    record4.set("response_options", "{'scale': '0-4'}");
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
    record5.set("question_text", "Stiffness - Morning stiffness");
    record5.set("response_type", "scale");
    record5.set("response_options", "{'scale': '0-4'}");
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
    record6.set("question_text", "Stiffness - Stiffness after sitting, lying, or resting later in the day");
    record6.set("response_type", "scale");
    record6.set("response_options", "{'scale': '0-4'}");
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
    record7.set("question_text", "Physical Function - Descending stairs");
    record7.set("response_type", "scale");
    record7.set("response_options", "{'scale': '0-4'}");
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
    record8.set("question_text", "Physical Function - Ascending stairs");
    record8.set("response_type", "scale");
    record8.set("response_options", "{'scale': '0-4'}");
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
    record9.set("question_text", "Physical Function - Rising from sitting");
    record9.set("response_type", "scale");
    record9.set("response_options", "{'scale': '0-4'}");
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
    record10.set("question_text", "Physical Function - Standing");
    record10.set("response_type", "scale");
    record10.set("response_options", "{'scale': '0-4'}");
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
    record11.set("question_text", "Physical Function - Bending to floor");
    record11.set("response_type", "scale");
    record11.set("response_options", "{'scale': '0-4'}");
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
    record12.set("assessment_type", "WOMAC");
    record12.set("question_number", 13);
    record12.set("question_text", "Physical Function - Walking on flat");
    record12.set("response_type", "scale");
    record12.set("response_options", "{'scale': '0-4'}");
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
    record13.set("assessment_type", "WOMAC");
    record13.set("question_number", 14);
    record13.set("question_text", "Physical Function - Getting in/out of car");
    record13.set("response_type", "scale");
    record13.set("response_options", "{'scale': '0-4'}");
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
    record14.set("assessment_type", "WOMAC");
    record14.set("question_number", 15);
    record14.set("question_text", "Physical Function - Going shopping");
    record14.set("response_type", "scale");
    record14.set("response_options", "{'scale': '0-4'}");
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

  const record15 = new Record(collection);
    record15.set("assessment_type", "WOMAC");
    record15.set("question_number", 16);
    record15.set("question_text", "Physical Function - Putting on socks");
    record15.set("response_type", "scale");
    record15.set("response_options", "{'scale': '0-4'}");
    record15.set("clinic_id", "default");
  try {
    app.save(record15);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record16 = new Record(collection);
    record16.set("assessment_type", "WOMAC");
    record16.set("question_number", 17);
    record16.set("question_text", "Physical Function - Rising from bed");
    record16.set("response_type", "scale");
    record16.set("response_options", "{'scale': '0-4'}");
    record16.set("clinic_id", "default");
  try {
    app.save(record16);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record17 = new Record(collection);
    record17.set("assessment_type", "WOMAC");
    record17.set("question_number", 18);
    record17.set("question_text", "Physical Function - Taking off socks");
    record17.set("response_type", "scale");
    record17.set("response_options", "{'scale': '0-4'}");
    record17.set("clinic_id", "default");
  try {
    app.save(record17);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record18 = new Record(collection);
    record18.set("assessment_type", "WOMAC");
    record18.set("question_number", 19);
    record18.set("question_text", "Physical Function - Lying in bed");
    record18.set("response_type", "scale");
    record18.set("response_options", "{'scale': '0-4'}");
    record18.set("clinic_id", "default");
  try {
    app.save(record18);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record19 = new Record(collection);
    record19.set("assessment_type", "WOMAC");
    record19.set("question_number", 20);
    record19.set("question_text", "Physical Function - Getting in/out of bath");
    record19.set("response_type", "scale");
    record19.set("response_options", "{'scale': '0-4'}");
    record19.set("clinic_id", "default");
  try {
    app.save(record19);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record20 = new Record(collection);
    record20.set("assessment_type", "WOMAC");
    record20.set("question_number", 21);
    record20.set("question_text", "Physical Function - Sitting");
    record20.set("response_type", "scale");
    record20.set("response_options", "{'scale': '0-4'}");
    record20.set("clinic_id", "default");
  try {
    app.save(record20);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record21 = new Record(collection);
    record21.set("assessment_type", "WOMAC");
    record21.set("question_number", 22);
    record21.set("question_text", "Physical Function - Getting on/off toilet");
    record21.set("response_type", "scale");
    record21.set("response_options", "{'scale': '0-4'}");
    record21.set("clinic_id", "default");
  try {
    app.save(record21);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record22 = new Record(collection);
    record22.set("assessment_type", "WOMAC");
    record22.set("question_number", 23);
    record22.set("question_text", "Physical Function - Heavy domestic duties");
    record22.set("response_type", "scale");
    record22.set("response_options", "{'scale': '0-4'}");
    record22.set("clinic_id", "default");
  try {
    app.save(record22);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record23 = new Record(collection);
    record23.set("assessment_type", "WOMAC");
    record23.set("question_number", 24);
    record23.set("question_text", "Physical Function - Light domestic duties");
    record23.set("response_type", "scale");
    record23.set("response_options", "{'scale': '0-4'}");
    record23.set("clinic_id", "default");
  try {
    app.save(record23);
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
