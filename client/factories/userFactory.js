discussionBoard.factory('UserFactory', function($http){
  var factory = {};
  var user = [];

  factory.findUser = function(name, callback){
    console.log("Factory", name)
    $http.get('/findUser/'+name).success(function(res){
      user = res;
      console.log("Our main user", user);
      callback(res);
    })
  }//closes index

  factory.shareUser = function(callback){
    callback(user);
  }
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

  //just for function
  factory.addcategory = function(category, callback){
    $http.post('/addcat', category).success(function(res){
      callback(res);
    })
  }
//
//
  return factory;
})//closes UserFactory
