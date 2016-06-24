var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
module.exports = (function(){
  return {

  index: function(req, res){
    Topic.find({}, function(err, topics){
      if(err){
        res.json(err);
      }
      else {
        res.json(topics);
      }
    });
  },
//
  getcategories: function(req,res){
  	Category.find({}, function(err, categories){
      if(err){
        res.json(err)
      }
      else {
      res.json(categories);
      }
  	});
  },
  create: function(req, res){
    console.log("Luke's", req.body);
    var topic = new Topic({
      name: req.body.name,
      category: req.body.category.name,
      description: req.body.description,
      username: req.body.username,
      posts: 0
    });
    topic.save(function(err){
      if(err){
        res.json(err);
      }
      else {
        res.json({message: "Successfully added "+ req.body.name});
      }
    })
  },//closes create
//
//   delete: function(req, res){
//     Order.remove({_id: req}, function(err){
//   		if(err){
//   			res.json(err);
//   		}
//   		else {
//   			res.json({message: "Successfully deleted."});
//   		}
//   	});
//   } //closes delete
//
}//closes return
})();//closes module.exports
