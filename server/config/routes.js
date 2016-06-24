var users = require('../controllers/users.js');
var topics = require('../controllers/topics.js');
var categories = require('../controllers/categories.js');

module.exports = function(app){

  app.get('/findUser/:name', function(req, res){
    console.log("routes", req.params.name);
    var name = req.params.name;
  	users.findUser(name, req, res)
  });
  //
  // app.delete('/customers/:id', function(req, res){
  //
  //   customers.delete(req.params.id, res);
  // })
  //
  app.post('/adduser', function(req, res){
    users.create(req, res);
  })
  app.get('/categories', function(req, res){
    categories.getcategories(req, res);
  })
  // app.post('/placeorders', function(req, res){
  //   orders.create(req, res);
  // })
  app.get('/topics', function(req, res){
    topics.index(req, res);
  })
  app.post('/createTopic', function(req, res){
    topics.create(req, res);
  })
  // app.put('/updateProduct/:id', function(req, res){
  //   var id=req.params.id;
  //   products.update(id, req, res);
  // })
  //

} //closes module.exports
