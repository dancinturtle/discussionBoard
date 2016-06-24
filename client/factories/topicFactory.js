discussionBoard.factory('TopicFactory', function($http){
  var factory = {};
  var topics = [];
  var categories = [];

  factory.index = function(callback){
    $http.get('/topics').success(function(res){
      topics = res;
      callback(topics);
    })
  }//closes index

  factory.getcategories = function(callback){
    $http.get('/categories').success(function(res){
      categories = res;
      callback(categories);
    })
  }//closes getcategories

  factory.create = function(newTopic, callback){
    $http.post('/createTopic', newTopic).success(function(res){

      callback(res.message);
    })
  }//closes create
  factory.updateQuantity = function(idObject, callback){
    $http.put('/updateProduct/'+idObject.id, idObject).success(function(res){
      callback(res.message);
    })
  }
  factory.addCat = function(newcat, callback){
    $http.post('/newcat', newcat).success(function(res){
      callback(res.message);
    })
  }
  return factory;
})
