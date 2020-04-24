const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const postLookup = [
  {
    $lookup: {
      from: "User",
      localField: "userId",
      foreignField: "_id",
      as: "exercisesList"
    }
  },
];
const exerciseSchema = new Schema({
  username: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId,  ref: "User" },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;