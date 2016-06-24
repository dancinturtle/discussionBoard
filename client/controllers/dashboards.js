discussionBoard.controller('DashBoardController', function($scope, UserFactory, TopicFactory, $location){


  UserFactory.shareUser(function(data){
    $scope.currentUser = data[0];
    console.log("Sharing!", $scope.currentUser);
    if($scope.currentUser === undefined){
      $location.url('/');
    }
  })

  TopicFactory.getcategories(function(data){
    $scope.categories = data;
    console.log("got the categories", $scope.categories);
  })

  // TopicFactory.index(function(data){
  //   $scope.topics = data;
  //   console.log("got the topics", $scope.topics);
  // })


  // CustomerFactory.index(function(data){
  //   $scope.customers = data;
  //   for(var i=0; i<$scope.customers.length; i++){
  //     var date = new Date($scope.customers[i].createdAt);
  //     $scope.customers[i].createdAt = date.toDateString();
  //   }
  // })
  // $scope.removeCustomer = function(customer){
  //
  //   $scope.message = false;
  //   CustomerFactory.delete(customer._id, function(data){
  //     $scope.message = data;
  //   });
  //   CustomerFactory.index(function(data){
  //     $scope.customers = data;
  //     for(var i=0; i<$scope.customers.length; i++){
  //       var date = new Date($scope.customers[i].createdAt);
  //       $scope.customers[i].createdAt = date.toDateString();
  //     }
  //   })
  // }
  $scope.addTopic = function(){
    $scope.newTopic.username = $scope.currentUser.name;
    console.log("new topic to add", $scope.newTopic);
    TopicFactory.create($scope.newTopic, function(data){
      console.log("Added a topic", data);
    });
    TopicFactory.index(function(data){
      $scope.topics = data;
      console.log("All topics", $scope.topics);
    })
    $scope.newTopic = {};
  }

  $scope.addCat = function(){
    TopicFactory.addCat($scope.newCat, function(data){
      console.log("Added a category", data);
    })
  }

})//closes CustomersController
