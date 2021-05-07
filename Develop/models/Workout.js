const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const WorkoutSchema = new Schema({
    miles: Number,
    type:  String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number
  });
  
  
const Workout = mongoose.model("exercise", WorkoutSchema)

module.exports = Workout