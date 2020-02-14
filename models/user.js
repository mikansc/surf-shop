const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  image: {
    secure_url: {
      type: String, default: '/images/default-profile.jpg'
    },
    public_id: String
  },
  email: { type: String, unique: true, require: true }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
