/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("AssessmentQuestions");

  const record0 = new Record(collection);
    record0.set("assessment_type", "NDI");
    record0.set("question_number", 1);
    record0.set("question_text", "Pain Intensity");
    record0.set("response_type", "scale");
    record0.set("response_options", "{'scale': '0-5', 'labels': ['No pain', 'Mild', 'Moderate', 'Fairly severe', 'Very severe', 'Worst imaginable']}");
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
    record1.set("assessment_type", "NDI");
    record1.set("question_number", 2);
    record1.set("question_text", "Personal Care (washing, dressing, etc.)");
    record1.set("response_type", "scale");
    record1.set("response_options", "{'scale': '0-5'}");
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
    record2.set("assessment_type", "NDI");
    record2.set("question_number", 3);
    record2.set("question_text", "Lifting");
    record2.set("response_type", "scale");
    record2.set("response_options", "{'scale': '0-5'}");
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
    record3.set("assessment_type", "NDI");
    record3.set("question_number", 4);
    record3.set("question_text", "Reading");
    record3.set("response_type", "scale");
    record3.set("response_options", "{'scale': '0-5'}");
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
    record4.set("assessment_type", "NDI");
    record4.set("question_number", 5);
    record4.set("question_text", "Headaches");
    record4.set("response_type", "scale");
    record4.set("response_options", "{'scale': '0-5'}");
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
    record5.set("assessment_type", "NDI");
    record5.set("question_number", 6);
    record5.set("question_text", "Concentration");
    record5.set("response_type", "scale");
    record5.set("response_options", "{'scale': '0-5'}");
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
    record6.set("assessment_type", "NDI");
    record6.set("question_number", 7);
    record6.set("question_text", "Work");
    record6.set("response_type", "scale");
    record6.set("response_options", "{'scale': '0-5'}");
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
    record7.set("assessment_type", "NDI");
    record7.set("question_number", 8);
    record7.set("question_text", "Driving");
    record7.set("response_type", "scale");
    record7.set("response_options", "{'scale': '0-5'}");
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
    record8.set("assessment_type", "NDI");
    record8.set("question_number", 9);
    record8.set("question_text", "Sleeping");
    record8.set("response_type", "scale");
    record8.set("response_options", "{'scale': '0-5'}");
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
    record9.set("assessment_type", "NDI");
    record9.set("question_number", 10);
    record9.set("question_text", "Recreation");
    record9.set("response_type", "scale");
    record9.set("response_options", "{'scale': '0-5'}");
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
    record10.set("assessment_type", "ODI");
    record10.set("question_number", 1);
    record10.set("question_text", "Pain Intensity");
    record10.set("response_type", "scale");
    record10.set("response_options", "{'scale': '0-5'}");
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
    record11.set("assessment_type", "ODI");
    record11.set("question_number", 2);
    record11.set("question_text", "Personal Care");
    record11.set("response_type", "scale");
    record11.set("response_options", "{'scale': '0-5'}");
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
    record12.set("assessment_type", "ODI");
    record12.set("question_number", 3);
    record12.set("question_text", "Lifting");
    record12.set("response_type", "scale");
    record12.set("response_options", "{'scale': '0-5'}");
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
    record13.set("assessment_type", "ODI");
    record13.set("question_number", 4);
    record13.set("question_text", "Walking");
    record13.set("response_type", "scale");
    record13.set("response_options", "{'scale': '0-5'}");
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
    record14.set("assessment_type", "ODI");
    record14.set("question_number", 5);
    record14.set("question_text", "Sitting");
    record14.set("response_type", "scale");
    record14.set("response_options", "{'scale': '0-5'}");
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
    record15.set("assessment_type", "ODI");
    record15.set("question_number", 6);
    record15.set("question_text", "Standing");
    record15.set("response_type", "scale");
    record15.set("response_options", "{'scale': '0-5'}");
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
    record16.set("assessment_type", "ODI");
    record16.set("question_number", 7);
    record16.set("question_text", "Sleeping");
    record16.set("response_type", "scale");
    record16.set("response_options", "{'scale': '0-5'}");
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
    record17.set("assessment_type", "ODI");
    record17.set("question_number", 8);
    record17.set("question_text", "Social Life");
    record17.set("response_type", "scale");
    record17.set("response_options", "{'scale': '0-5'}");
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
    record18.set("assessment_type", "ODI");
    record18.set("question_number", 9);
    record18.set("question_text", "Traveling");
    record18.set("response_type", "scale");
    record18.set("response_options", "{'scale': '0-5'}");
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
    record19.set("assessment_type", "ODI");
    record19.set("question_number", 10);
    record19.set("question_text", "Changing degree of pain");
    record19.set("response_type", "scale");
    record19.set("response_options", "{'scale': '0-5'}");
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
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})
