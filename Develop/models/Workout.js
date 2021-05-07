const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const workoutSchema = new Schema({
    miles: Number,
    type:  String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number
  });
  
  
const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout