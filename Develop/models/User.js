const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    usermame: {
      type: String,
      required:true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, 'Please fill in a valid email address'],
    },
    thoughts: {
      type: Number,
      required: true,
    },
    friends: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const validateEmail= function(email){
  const re = new RegExp("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$");
  return re.test(email);
}

const User = model('user', userSchema);
module.exports = User;
