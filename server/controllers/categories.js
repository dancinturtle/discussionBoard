var mongoose = require('mongoose');
var Category = mongoose.model('Category');
module.exports = (function(){
  return {
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
  },//closes index
//   create: function(req, res){
//     console.log("Luke's", req.body.product);
//     var topic = new Topic({
//       name: req.body.name
//                 });
//     topic.save(function(err){
//       if(err){
//         res.json(err);
//       }
//       else {
//         res.json({message: "Successfully added "+ req.body.name});
//       }
//     })
//   },//closes create
// //
// //   delete: function(req, res){
// //     Order.remove({_id: req}, function(err){
// //   		if(err){
// //   			res.json(err);
// //   		}
// //   		else {
// //   			res.json({message: "Successfully deleted."});
// //   		}
// //   	});
// //   } //closes delete
// //
}//closes return
})();//closes module.exports
