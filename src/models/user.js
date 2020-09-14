const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: String, unique: true },
  username: { type: String, unique: true },
  medications: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Medication',
    },
  ],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
