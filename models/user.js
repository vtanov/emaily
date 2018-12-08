// Create the mongoose User class Class
const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// code condensed !!!!
// monggose object has a property schema. take it and assign it to Schema
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  // new field to handle credits,
  // assign an object to specify type and default val:
  credits: { type: Number, default: 0 }
});

// tell mongoose we want to create it
// if already exists it will NOT overwrite
mongoose.model("users", userSchema);
