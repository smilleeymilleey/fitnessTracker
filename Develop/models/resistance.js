import mongoose from 'mongoose';
const { Schema } = mongoose;

export const resistacneSchema = new Schema({
    type:  String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number
  });

  