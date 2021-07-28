const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  pass: String,
  profileImg: String,
  googleId: String,
  facebookId: String
})

const User = new mongoose.model('user', userSchema)

module.exports = User