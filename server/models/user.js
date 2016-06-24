var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength:[3, 'Your name is too short'], unique:true},
  topics: {type: Number},
  posts: {type: Number},
  comments: {type: Number}
	}, {timestamps: true })

var User = mongoose.model('User', UserSchema);
