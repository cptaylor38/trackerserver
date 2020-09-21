const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: String, unique: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  medications: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Medication',
    },
  ],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
