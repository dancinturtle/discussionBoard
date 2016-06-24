var mongoose = require('mongoose');
var TopicSchema = new mongoose.Schema({
	name: {type: String, required: true},
  category: {type: String, required: true},
	description: {type: String, required: true},
  username: {type: String, required: true},
  posts: {type: Number}
	}, {timestamps: true })

var Topic = mongoose.model('Topic', TopicSchema);
