const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String },
  medications: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Medication',
    },
  ],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
