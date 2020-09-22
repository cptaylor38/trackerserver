const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

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

userSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (password) {
  const user = this;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return reject(err);
      }
      if (!isMatch) {
        return reject(false);
      }
      resolve(true);
    });
  });
};

const User = mongoose.model('User', userSchema);
module.exports = User;
