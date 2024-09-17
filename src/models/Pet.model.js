import mongoose from "mongoose";

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specie: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  lastSeenLocation: {
    type: String,
    required: true,
  },
  dateLost: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ownerContact: {
    type: Number,
    required: true,
  },
  photoURL: {
    type: String,
    required: true,
  },
});

const Pet = mongoose.model("Pet", PetSchema);

export default Pet;
