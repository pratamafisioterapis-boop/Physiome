/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("AssessmentQuestions");

  const record0 = new Record(collection);
    record0.set("assessment_type", "NDI");
    record0.set("question_number", 1);
    record0.set("question_text", "Pain Intensity - How would you rate your neck pain on a scale of 0-5?");
    record0.set("response_type", "scale");
    record0.set("response_options", [{"value": 0, "label": "No pain"}, {"value": 1, "label": "Mild pain"}, {"value": 2, "label": "Moderate pain"}, {"value": 3, "label": "Fairly severe pain"}, {"value": 4, "label": "Very severe pain"}, {"value": 5, "label": "Worst imaginable pain"}]);
    record0.set("help_text", "Rate your current neck pain intensity");
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
    record1.set("assessment_type", "NDI");
    record1.set("question_number", 2);
    record1.set("question_text", "Personal Care (washing, dressing) - How much difficulty do you have with personal care?");
    record1.set("response_type", "scale");
    record1.set("response_options", [{"value": 0, "label": "No difficulty"}, {"value": 1, "label": "Slight difficulty"}, {"value": 2, "label": "Moderate difficulty"}, {"value": 3, "label": "Fairly severe difficulty"}, {"value": 4, "label": "Very severe difficulty"}, {"value": 5, "label": "Unable to perform"}]);
    record1.set("help_text", "Rate difficulty with washing and dressing");
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
    record2.set("assessment_type", "NDI");
    record2.set("question_number", 3);
    record2.set("question_text", "Lifting - How much difficulty do you have lifting objects?");
    record2.set("response_type", "scale");
    record2.set("response_options", [{"value": 0, "label": "No difficulty"}, {"value": 1, "label": "Slight difficulty"}, {"value": 2, "label": "Moderate difficulty"}, {"value": 3, "label": "Fairly severe difficulty"}, {"value": 4, "label": "Very severe difficulty"}, {"value": 5, "label": "Unable to lift"}]);
    record2.set("help_text", "Rate difficulty with lifting activities");
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
    record3.set("assessment_type", "NDI");
    record3.set("question_number", 4);
    record3.set("question_text", "Reading - How much difficulty do you have reading?");
    record3.set("response_type", "scale");
    record3.set("response_options", [{"value": 0, "label": "No difficulty"}, {"value": 1, "label": "Slight difficulty"}, {"value": 2, "label": "Moderate difficulty"}, {"value": 3, "label": "Fairly severe difficulty"}, {"value": 4, "label": "Very severe difficulty"}, {"value": 5, "label": "Unable to read"}]);
    record3.set("help_text", "Rate difficulty with reading activities");
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
    record4.set("assessment_type", "NDI");
    record4.set("question_number", 5);
    record4.set("question_text", "Headaches - How often do you experience headaches?");
    record4.set("response_type", "scale");
    record4.set("response_options", [{"value": 0, "label": "No headaches"}, {"value": 1, "label": "Occasional headaches"}, {"value": 2, "label": "Frequent headaches"}, {"value": 3, "label": "Very frequent headaches"}, {"value": 4, "label": "Constant headaches"}, {"value": 5, "label": "Severe constant headaches"}]);
    record4.set("help_text", "Rate frequency of headaches");
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
    record5.set("assessment_type", "NDI");
    record5.set("question_number", 6);
    record5.set("question_text", "Concentration - How much difficulty do you have concentrating?");
    record5.set("response_type", "scale");
    record5.set("response_options", [{"value": 0, "label": "No difficulty"}, {"value": 1, "label": "Slight difficulty"}, {"value": 2, "label": "Moderate difficulty"}, {"value": 3, "label": "Fairly severe difficulty"}, {"value": 4, "label": "Very severe difficulty"}, {"value": 5, "label": "Unable to concentrate"}]);
    record5.set("help_text", "Rate difficulty with concentration");
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
    record6.set("assessment_type", "NDI");
    record6.set("question_number", 7);
    record6.set("question_text", "Work - How much difficulty do you have with work activities?");
    record6.set("response_type", "scale");
    record6.set("response_options", [{"value": 0, "label": "No difficulty"}, {"value": 1, "label": "Slight difficulty"}, {"value": 2, "label": "Moderate difficulty"}, {"value": 3, "label": "Fairly severe difficulty"}, {"value": 4, "label": "Very severe difficulty"}, {"value": 5, "label": "Unable to work"}]);
    record6.set("help_text", "Rate difficulty with work-related activities");
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

  const record7 = new Record(collection);
    record7.set("assessment_type", "NDI");
    record7.set("question_number", 8);
    record7.set("question_text", "Driving - How much difficulty do you have driving?");
    record7.set("response_type", "scale");
    record7.set("response_options", [{"value": 0, "label": "No difficulty"}, {"value": 1, "label": "Slight difficulty"}, {"value": 2, "label": "Moderate difficulty"}, {"value": 3, "label": "Fairly severe difficulty"}, {"value": 4, "label": "Very severe difficulty"}, {"value": 5, "label": "Unable to drive"}]);
    record7.set("help_text", "Rate difficulty with driving");
    record7.set("clinic_id", "system");
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
    record8.set("question_text", "Sleeping - How much difficulty do you have sleeping?");
    record8.set("response_type", "scale");
    record8.set("response_options", [{"value": 0, "label": "No difficulty"}, {"value": 1, "label": "Slight difficulty"}, {"value": 2, "label": "Moderate difficulty"}, {"value": 3, "label": "Fairly severe difficulty"}, {"value": 4, "label": "Very severe difficulty"}, {"value": 5, "label": "Unable to sleep"}]);
    record8.set("help_text", "Rate difficulty with sleep");
    record8.set("clinic_id", "system");
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
    record9.set("question_text", "Recreation - How much difficulty do you have with recreational activities?");
    record9.set("response_type", "scale");
    record9.set("response_options", [{"value": 0, "label": "No difficulty"}, {"value": 1, "label": "Slight difficulty"}, {"value": 2, "label": "Moderate difficulty"}, {"value": 3, "label": "Fairly severe difficulty"}, {"value": 4, "label": "Very severe difficulty"}, {"value": 5, "label": "Unable to participate"}]);
    record9.set("help_text", "Rate difficulty with recreational activities");
    record9.set("clinic_id", "system");
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
    record10.set("question_text", "Pain Intensity - How would you rate your back pain on a scale of 0-5?");
    record10.set("response_type", "scale");
    record10.set("response_options", [{"value": 0, "label": "No pain"}, {"value": 1, "label": "Mild pain"}, {"value": 2, "label": "Moderate pain"}, {"value": 3, "label": "Fairly severe pain"}, {"value": 4, "label": "Very severe pain"}, {"value": 5, "label": "Worst imaginable pain"}]);
    record10.set("help_text", "Rate your current back pain intensity");
    record10.set("clinic_id", "system");
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
    record11.set("question_text", "Personal Care - How much difficulty do you have with personal care?");
    record11.set("response_type", "scale");
    record11.set("response_options", [{"value": 0, "label": "No difficulty"}, {"value": 1, "label": "Slight difficulty"}, {"value": 2, "label": "Moderate difficulty"}, {"value": 3, "label": "Fairly severe difficulty"}, {"value": 4, "label": "Very severe difficulty"}, {"value": 5, "label": "Unable to perform"}]);
    record11.set("help_text", "Rate difficulty with washing and dressing");
    record11.set("clinic_id", "system");
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
    record12.set("question_text", "Lifting - How much difficulty do you have lifting objects?");
    record12.set("response_type", "scale");
    record12.set("response_options", [{"value": 0, "label": "No difficulty"}, {"value": 1, "label": "Slight difficulty"}, {"value": 2, "label": "Moderate difficulty"}, {"value": 3, "label": "Fairly severe difficulty"}, {"value": 4, "label": "Very severe difficulty"}, {"value": 5, "label": "Unable to lift"}]);
    record12.set("help_text", "Rate difficulty with lifting activities");
    record12.set("clinic_id", "system");
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
    record13.set("question_text", "Walking - How much difficulty do you have walking?");
    record13.set("response_type", "scale");
    record13.set("response_options", [{"value": 0, "label": "No difficulty"}, {"value": 1, "label": "Slight difficulty"}, {"value": 2, "label": "Moderate difficulty"}, {"value": 3, "label": "Fairly severe difficulty"}, {"value": 4, "label": "Very severe difficulty"}, {"value": 5, "label": "Unable to walk"}]);
    record13.set("help_text", "Rate difficulty with walking");
    record13.set("clinic_id", "system");
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
    record14.set("question_text", "Sitting - How much difficulty do you have sitting?");
    record14.set("response_type", "scale");
    record14.set("response_options", [{"value": 0, "label": "No difficulty"}, {"value": 1, "label": "Slight difficulty"}, {"value": 2, "label": "Moderate difficulty"}, {"value": 3, "label": "Fairly severe difficulty"}, {"value": 4, "label": "Very severe difficulty"}, {"value": 5, "label": "Unable to sit"}]);
    record14.set("help_text", "Rate difficulty with sitting");
    record14.set("clinic_id", "system");
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
    record15.set("question_text", "Standing - How much difficulty do you have standing?");
    record15.set("response_type", "scale");
    record15.set("response_options", [{"value": 0, "label": "No difficulty"}, {"value": 1, "label": "Slight difficulty"}, {"value": 2, "label": "Moderate difficulty"}, {"value": 3, "label": "Fairly severe difficulty"}, {"value": 4, "label": "Very severe difficulty"}, {"value": 5, "label": "Unable to stand"}]);
    record15.set("help_text", "Rate difficulty with standing");
    record15.set("clinic_id", "system");
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
    record16.set("question_text", "Sleeping - How much difficulty do you have sleeping?");
    record16.set("response_type", "scale");
    record16.set("response_options", [{"value": 0, "label": "No difficulty"}, {"value": 1, "label": "Slight difficulty"}, {"value": 2, "label": "Moderate difficulty"}, {"value": 3, "label": "Fairly severe difficulty"}, {"value": 4, "label": "Very severe difficulty"}, {"value": 5, "label": "Unable to sleep"}]);
    record16.set("help_text", "Rate difficulty with sleep");
    record16.set("clinic_id", "system");
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
    record17.set("question_text", "Social Life - How much difficulty do you have with social activities?");
    record17.set("response_type", "scale");
    record17.set("response_options", [{"value": 0, "label": "No difficulty"}, {"value": 1, "label": "Slight difficulty"}, {"value": 2, "label": "Moderate difficulty"}, {"value": 3, "label": "Fairly severe difficulty"}, {"value": 4, "label": "Very severe difficulty"}, {"value": 5, "label": "Unable to participate"}]);
    record17.set("help_text", "Rate difficulty with social activities");
    record17.set("clinic_id", "system");
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
    record18.set("question_text", "Traveling - How much difficulty do you have traveling?");
    record18.set("response_type", "scale");
    record18.set("response_options", [{"value": 0, "label": "No difficulty"}, {"value": 1, "label": "Slight difficulty"}, {"value": 2, "label": "Moderate difficulty"}, {"value": 3, "label": "Fairly severe difficulty"}, {"value": 4, "label": "Very severe difficulty"}, {"value": 5, "label": "Unable to travel"}]);
    record18.set("help_text", "Rate difficulty with traveling");
    record18.set("clinic_id", "system");
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
    record19.set("question_text", "Changing Degree of Intensity - How much does pain change with activity?");
    record19.set("response_type", "scale");
    record19.set("response_options", [{"value": 0, "label": "No change"}, {"value": 1, "label": "Slight change"}, {"value": 2, "label": "Moderate change"}, {"value": 3, "label": "Fairly severe change"}, {"value": 4, "label": "Very severe change"}, {"value": 5, "label": "Extreme change"}]);
    record19.set("help_text", "Rate how pain intensity changes with activity");
    record19.set("clinic_id", "system");
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
