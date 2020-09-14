const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EntriesSchema = new Schema({
  drugname: {
    type: String,
    medication: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  dosage: {
    type: Number,
  },
  date: { type: Date, default: Date.now },
});

const Medication = mongoose.model('Medication', EntriesSchema);

module.exports = Medication;
