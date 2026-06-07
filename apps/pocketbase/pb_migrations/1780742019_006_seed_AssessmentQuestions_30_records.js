/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("AssessmentQuestions");

  const record0 = new Record(collection);
    record0.set("assessment_type", "DASH");
    record0.set("question_number", 1);
    record0.set("question_text", "Open a tight or new jar");
    record0.set("response_type", "scale");
    record0.set("response_options", "{'scale': '1-5'}");
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
    record1.set("question_text", "Write");
    record1.set("response_type", "scale");
    record1.set("response_options", "{'scale': '1-5'}");
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
    record2.set("question_text", "Turn a key");
    record2.set("response_type", "scale");
    record2.set("response_options", "{'scale': '1-5'}");
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
    record3.set("question_text", "Prepare a meal");
    record3.set("response_type", "scale");
    record3.set("response_options", "{'scale': '1-5'}");
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
    record4.set("question_text", "Push open a heavy door");
    record4.set("response_type", "scale");
    record4.set("response_options", "{'scale': '1-5'}");
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
    record5.set("question_text", "Place an object on a shelf above your head");
    record5.set("response_type", "scale");
    record5.set("response_options", "{'scale': '1-5'}");
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
    record6.set("question_text", "Do heavy household chores");
    record6.set("response_type", "scale");
    record6.set("response_options", "{'scale': '1-5'}");
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
    record7.set("question_text", "Garden or do yard work");
    record7.set("response_type", "scale");
    record7.set("response_options", "{'scale': '1-5'}");
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
    record8.set("question_text", "Make a bed");
    record8.set("response_type", "scale");
    record8.set("response_options", "{'scale': '1-5'}");
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
    record9.set("question_text", "Carry a shopping bag or briefcase");
    record9.set("response_type", "scale");
    record9.set("response_options", "{'scale': '1-5'}");
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
    record10.set("question_text", "Carry a heavy object (over 10 lbs)");
    record10.set("response_type", "scale");
    record10.set("response_options", "{'scale': '1-5'}");
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
    record11.set("question_text", "Change a light bulb overhead");
    record11.set("response_type", "scale");
    record11.set("response_options", "{'scale': '1-5'}");
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
    record12.set("question_text", "Wash your hair");
    record12.set("response_type", "scale");
    record12.set("response_options", "{'scale': '1-5'}");
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
    record13.set("question_text", "Wash your back");
    record13.set("response_type", "scale");
    record13.set("response_options", "{'scale': '1-5'}");
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
    record14.set("question_text", "Put on a pullover sweater");
    record14.set("response_type", "scale");
    record14.set("response_options", "{'scale': '1-5'}");
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
    record15.set("assessment_type", "DASH");
    record15.set("question_number", 16);
    record15.set("question_text", "Use a knife to cut food");
    record15.set("response_type", "scale");
    record15.set("response_options", "{'scale': '1-5'}");
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
    record16.set("assessment_type", "DASH");
    record16.set("question_number", 17);
    record16.set("question_text", "Pick up a coin from a table");
    record16.set("response_type", "scale");
    record16.set("response_options", "{'scale': '1-5'}");
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
    record17.set("assessment_type", "DASH");
    record17.set("question_number", 18);
    record17.set("question_text", "Perform sexual activity");
    record17.set("response_type", "scale");
    record17.set("response_options", "{'scale': '1-5'}");
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
    record18.set("assessment_type", "DASH");
    record18.set("question_number", 19);
    record18.set("question_text", "Dress yourself");
    record18.set("response_type", "scale");
    record18.set("response_options", "{'scale': '1-5'}");
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
    record19.set("assessment_type", "DASH");
    record19.set("question_number", 20);
    record19.set("question_text", "Throw a ball");
    record19.set("response_type", "scale");
    record19.set("response_options", "{'scale': '1-5'}");
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
    record20.set("assessment_type", "DASH");
    record20.set("question_number", 21);
    record20.set("question_text", "Use a hammer");
    record20.set("response_type", "scale");
    record20.set("response_options", "{'scale': '1-5'}");
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
    record21.set("assessment_type", "DASH");
    record21.set("question_number", 22);
    record21.set("question_text", "Recreational activities which require some force or impact through your arm, shoulder or hand");
    record21.set("response_type", "scale");
    record21.set("response_options", "{'scale': '1-5'}");
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
    record22.set("assessment_type", "DASH");
    record22.set("question_number", 23);
    record22.set("question_text", "Work that requires you to move your arm or shoulder");
    record22.set("response_type", "scale");
    record22.set("response_options", "{'scale': '1-5'}");
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
    record23.set("assessment_type", "DASH");
    record23.set("question_number", 24);
    record23.set("question_text", "Work that requires you to use a keyboard or mouse");
    record23.set("response_type", "scale");
    record23.set("response_options", "{'scale': '1-5'}");
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

  const record24 = new Record(collection);
    record24.set("assessment_type", "DASH");
    record24.set("question_number", 25);
    record24.set("question_text", "During the past week, to what extent has your arm, shoulder or hand problem interfered with your normal social activities with family, friends, groups, or community?");
    record24.set("response_type", "scale");
    record24.set("response_options", "{'scale': '1-5'}");
    record24.set("clinic_id", "default");
  try {
    app.save(record24);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record25 = new Record(collection);
    record25.set("assessment_type", "DASH");
    record25.set("question_number", 26);
    record25.set("question_text", "During the past week, were you limited in your work or other regular daily activities as a result of your arm, shoulder or hand problem?");
    record25.set("response_type", "scale");
    record25.set("response_options", "{'scale': '1-5'}");
    record25.set("clinic_id", "default");
  try {
    app.save(record25);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record26 = new Record(collection);
    record26.set("assessment_type", "DASH");
    record26.set("question_number", 27);
    record26.set("question_text", "Arm, shoulder or hand pain");
    record26.set("response_type", "scale");
    record26.set("response_options", "{'scale': '1-5'}");
    record26.set("clinic_id", "default");
  try {
    app.save(record26);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record27 = new Record(collection);
    record27.set("assessment_type", "DASH");
    record27.set("question_number", 28);
    record27.set("question_text", "Tingling in your arm, shoulder or hand");
    record27.set("response_type", "scale");
    record27.set("response_options", "{'scale': '1-5'}");
    record27.set("clinic_id", "default");
  try {
    app.save(record27);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record28 = new Record(collection);
    record28.set("assessment_type", "DASH");
    record28.set("question_number", 29);
    record28.set("question_text", "Difficulty sleeping due to arm, shoulder or hand pain");
    record28.set("response_type", "scale");
    record28.set("response_options", "{'scale': '1-5'}");
    record28.set("clinic_id", "default");
  try {
    app.save(record28);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record29 = new Record(collection);
    record29.set("assessment_type", "DASH");
    record29.set("question_number", 30);
    record29.set("question_text", "Weakness in your arm, shoulder or hand");
    record29.set("response_type", "scale");
    record29.set("response_options", "{'scale': '1-5'}");
    record29.set("clinic_id", "default");
  try {
    app.save(record29);
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
