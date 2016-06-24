discussionBoard.factory('UserFactory', function($http){
  var factory = {};
  var users = [];

  factory.findUser = function(name, callback){
    console.log("Factory", name)
    $http.get('/findUser/'+name).success(function(res){
      callback(res);
    })
  }//closes index
  // factory.delete = function(id, callback){
  //
  //   $http.delete('/customers/'+id).success(function(res){
  //     callback(res.message);
  //   })
  // }
  factory.create = function(user, callback){
    $http.post('/adduser', user).success(function(res){
      callback(res.message);
    })
  }
//
//
  return factory;
})//closes UserFactory
