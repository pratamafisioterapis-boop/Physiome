/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("exercises");

  const record0 = new Record(collection);
    record0.set("name", "Chin Tuck");
    record0.set("body_region", "Neck");
    record0.set("difficulty", "Beginner");
    record0.set("category", "Mobility");
    record0.set("description", "Gentle neck exercise to improve posture and reduce neck tension");
    record0.set("instructions", "1. Sit upright 2. Gently tuck chin toward chest 3. Hold 5 seconds 4. Release");
    record0.set("target_muscles", "Neck flexors, Anterior scalene");
    record0.set("contraindications", "Severe cervical spine pathology");
    record0.set("progression_tips", "Add resistance with hand");
    record0.set("thumbnail_url", "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop");
    record0.set("clinic_id", "default_clinic");
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
    record1.set("name", "Scapular Retraction");
    record1.set("body_region", "Shoulder");
    record1.set("difficulty", "Beginner");
    record1.set("category", "Strengthening");
    record1.set("description", "Strengthen shoulder blade muscles");
    record1.set("instructions", "1. Sit upright 2. Pull shoulder blades back 3. Hold 5 seconds 4. Release");
    record1.set("target_muscles", "Rhomboids, Middle trapezius");
    record1.set("contraindications", "Acute shoulder injury");
    record1.set("progression_tips", "Add resistance band");
    record1.set("thumbnail_url", "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop");
    record1.set("clinic_id", "default_clinic");
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
    record2.set("name", "Shoulder Pendulum");
    record2.set("body_region", "Shoulder");
    record2.set("difficulty", "Beginner");
    record2.set("category", "Mobility");
    record2.set("description", "Gentle shoulder mobilization exercise");
    record2.set("instructions", "1. Bend forward at waist 2. Let arm hang freely 3. Make small circles 4. Gradually increase size");
    record2.set("target_muscles", "Shoulder joint capsule");
    record2.set("contraindications", "Acute shoulder dislocation");
    record2.set("progression_tips", "Increase circle size and speed");
    record2.set("thumbnail_url", "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop");
    record2.set("clinic_id", "default_clinic");
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
    record3.set("name", "Hamstring Stretch");
    record3.set("body_region", "Lower Back");
    record3.set("difficulty", "Beginner");
    record3.set("category", "Stretching");
    record3.set("description", "Stretch hamstring muscles to improve flexibility");
    record3.set("instructions", "1. Sit with legs extended 2. Bend forward at hips 3. Hold 30 seconds 4. Relax");
    record3.set("target_muscles", "Hamstrings, Gastrocnemius");
    record3.set("contraindications", "Acute hamstring strain");
    record3.set("progression_tips", "Increase hold duration to 60 seconds");
    record3.set("thumbnail_url", "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop");
    record3.set("clinic_id", "default_clinic");
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
    record4.set("name", "Bridge Exercise");
    record4.set("body_region", "Hip");
    record4.set("difficulty", "Intermediate");
    record4.set("category", "Strengthening");
    record4.set("description", "Strengthen glutes and lower back");
    record4.set("instructions", "1. Lie on back with knees bent 2. Push through heels to lift hips 3. Hold 2 seconds 4. Lower down");
    record4.set("target_muscles", "Gluteus maximus, Erector spinae");
    record4.set("contraindications", "Severe lower back pain");
    record4.set("progression_tips", "Add single leg variation");
    record4.set("thumbnail_url", "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop");
    record4.set("clinic_id", "default_clinic");
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
    record5.set("name", "Straight Leg Raise");
    record5.set("body_region", "Hip");
    record5.set("difficulty", "Intermediate");
    record5.set("category", "Strengthening");
    record5.set("description", "Strengthen quadriceps and hip flexors");
    record5.set("instructions", "1. Lie on back 2. Keep one leg bent 3. Raise straight leg to hip height 4. Lower slowly");
    record5.set("target_muscles", "Quadriceps, Iliopsoas");
    record5.set("contraindications", "Hip flexor strain");
    record5.set("progression_tips", "Add ankle weights");
    record5.set("thumbnail_url", "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop");
    record5.set("clinic_id", "default_clinic");
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
    record6.set("name", "Heel Slide");
    record6.set("body_region", "Knee");
    record6.set("difficulty", "Beginner");
    record6.set("category", "Mobility");
    record6.set("description", "Improve knee mobility and range of motion");
    record6.set("instructions", "1. Lie on back with knees bent 2. Slide heel toward buttock 3. Hold 5 seconds 4. Slide back");
    record6.set("target_muscles", "Quadriceps, Hamstrings");
    record6.set("contraindications", "Severe knee arthritis");
    record6.set("progression_tips", "Increase speed of movement");
    record6.set("thumbnail_url", "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop");
    record6.set("clinic_id", "default_clinic");
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
    record7.set("name", "Calf Stretch");
    record7.set("body_region", "Ankle");
    record7.set("difficulty", "Beginner");
    record7.set("category", "Stretching");
    record7.set("description", "Stretch calf muscles to improve ankle flexibility");
    record7.set("instructions", "1. Stand facing wall 2. Step back with one leg 3. Keep heel down 4. Lean forward 5. Hold 30 seconds");
    record7.set("target_muscles", "Gastrocnemius, Soleus");
    record7.set("contraindications", "Calf strain");
    record7.set("progression_tips", "Bend back knee for deeper stretch");
    record7.set("thumbnail_url", "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop");
    record7.set("clinic_id", "default_clinic");
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
    record8.set("name", "Quadriceps Stretch");
    record8.set("body_region", "Knee");
    record8.set("difficulty", "Beginner");
    record8.set("category", "Stretching");
    record8.set("description", "Stretch quadriceps muscles");
    record8.set("instructions", "1. Stand on one leg 2. Pull other foot toward buttock 3. Keep knees together 4. Hold 30 seconds");
    record8.set("target_muscles", "Quadriceps");
    record8.set("contraindications", "Knee ligament injury");
    record8.set("progression_tips", "Increase hold duration");
    record8.set("thumbnail_url", "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop");
    record8.set("clinic_id", "default_clinic");
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
    record9.set("name", "Glute Bridge");
    record9.set("body_region", "Hip");
    record9.set("difficulty", "Intermediate");
    record9.set("category", "Strengthening");
    record9.set("description", "Strengthen glutes and improve hip stability");
    record9.set("instructions", "1. Lie on back with knees bent 2. Feet flat on floor 3. Push through heels to lift hips 4. Squeeze glutes at top");
    record9.set("target_muscles", "Gluteus maximus, Gluteus medius");
    record9.set("contraindications", "Severe lower back pain");
    record9.set("progression_tips", "Add single leg variation or hold at top");
    record9.set("thumbnail_url", "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop");
    record9.set("clinic_id", "default_clinic");
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
    record10.set("name", "Plantar Fascia Stretch");
    record10.set("body_region", "Ankle");
    record10.set("difficulty", "Beginner");
    record10.set("category", "Stretching");
    record10.set("description", "Stretch plantar fascia to relieve heel pain");
    record10.set("instructions", "1. Sit in chair 2. Cross one leg over other 3. Pull toes back toward shin 4. Hold 30 seconds");
    record10.set("target_muscles", "Plantar fascia, Intrinsic foot muscles");
    record10.set("contraindications", "Acute plantar fasciitis");
    record10.set("progression_tips", "Use massage ball under foot");
    record10.set("thumbnail_url", "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop");
    record10.set("clinic_id", "default_clinic");
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
    record11.set("name", "Rotator Cuff Strengthening");
    record11.set("body_region", "Shoulder");
    record11.set("difficulty", "Intermediate");
    record11.set("category", "Strengthening");
    record11.set("description", "Strengthen rotator cuff muscles for shoulder stability");
    record11.set("instructions", "1. Stand with elbow bent 90 degrees 2. Hold light weight 3. Rotate forearm outward 4. Return slowly");
    record11.set("target_muscles", "Infraspinatus, Supraspinatus, Teres minor");
    record11.set("contraindications", "Acute rotator cuff tear");
    record11.set("progression_tips", "Increase weight gradually");
    record11.set("thumbnail_url", "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop");
    record11.set("clinic_id", "default_clinic");
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
    record12.set("name", "Lateral Band Walk");
    record12.set("body_region", "Hip");
    record12.set("difficulty", "Intermediate");
    record12.set("category", "Strengthening");
    record12.set("description", "Strengthen hip abductors and improve hip stability");
    record12.set("instructions", "1. Place band around legs above knees 2. Slight squat position 3. Step sideways 4. Keep tension on band");
    record12.set("target_muscles", "Gluteus medius, Tensor fasciae latae");
    record12.set("contraindications", "Hip labral tear");
    record12.set("progression_tips", "Use stronger resistance band");
    record12.set("thumbnail_url", "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop");
    record12.set("clinic_id", "default_clinic");
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
    record13.set("name", "Prone Hip Extension");
    record13.set("body_region", "Hip");
    record13.set("difficulty", "Beginner");
    record13.set("category", "Strengthening");
    record13.set("description", "Strengthen glutes and improve hip extension");
    record13.set("instructions", "1. Lie face down 2. Keep one leg straight 3. Lift leg toward ceiling 4. Hold 2 seconds 5. Lower slowly");
    record13.set("target_muscles", "Gluteus maximus, Hamstrings");
    record13.set("contraindications", "Lower back pain");
    record13.set("progression_tips", "Add ankle weight");
    record13.set("thumbnail_url", "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop");
    record13.set("clinic_id", "default_clinic");
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
    record14.set("name", "Ankle Alphabet");
    record14.set("body_region", "Ankle");
    record14.set("difficulty", "Beginner");
    record14.set("category", "Mobility");
    record14.set("description", "Improve ankle mobility and proprioception");
    record14.set("instructions", "1. Sit in chair 2. Extend one leg 3. Use toes to write alphabet letters 4. Repeat with other foot");
    record14.set("target_muscles", "Ankle stabilizers, Intrinsic foot muscles");
    record14.set("contraindications", "Severe ankle sprain");
    record14.set("progression_tips", "Write larger letters");
    record14.set("thumbnail_url", "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop");
    record14.set("clinic_id", "default_clinic");
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
