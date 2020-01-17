var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
	username: String,
	password: String
});

	
// add backages and methods from passport-local-passport to UserSchemas
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",UserSchema);

	