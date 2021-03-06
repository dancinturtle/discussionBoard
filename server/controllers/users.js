var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = (function(){
  return {
//
  findUser: function(name, req,res){
  	User.find({name: name}, function(err, user){
      if(err){
        console.log("Major error");
        res.json(err)
      }
      else {
        console.log("Here's what I got", user);
      res.json(user);
      }
  	});//closes Customer.find
  },//closes index
  create: function(req, res){
    var user = new User({
      name: req.body.name,
      topics: 0,
      posts: 0,
      comments: 0
    });
    user.save(function(err){
      if(err){
        console.log(err.code);
        if(err.code){
          if(err.code == 11000){
            console.log("GOT THE ERROR CODE");
            res.json({message: "Your name is not unique. How does that make you feel?"});
          }
          else {
            res.json({message: "This customer because of error code " + err.code})
          }
        }
        else {
          // console.log(err.errors.name.message);
        res.json({message: err.errors.name.message});
        }
      }
      else {
        res.json({message: "Successfully added "+ req.body.name});
      }
    })//closes customer.save
  },//closes create

//   delete: function(req, res){
//     Customer.remove({_id: req}, function(err){
//   		if(err){
//   			res.json(err);
//   		}
//   		else {
//   			res.json({message: "Successfully deleted."});
//   		}
//   	}); //closes Customer.remove
//   } //closes delete
//
}//closes return
})();//closes module.exports
