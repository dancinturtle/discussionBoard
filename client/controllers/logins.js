discussionBoard.controller('LoginController', function($scope, $location, UserFactory){
  //when the user types in their name, find out if they already exist in the database
  $scope.checkUser = function(){

    UserFactory.findUser($scope.userLogin.name, function(data){

      $scope.currentUser = data;

      if($scope.currentUser.length > 0 ){
        $scope.currentUser = $scope.currentUser[0];
        console.log("going with this", $scope.currentUser);
        $location.url('/dashboard');
      }
      else {
        $scope.addUser();
      }

    })
  }//closes checkUser
  //if they don't exist, add them to database
  $scope.addUser = function(){
    UserFactory.create($scope.userLogin, function(data){
      console.log(data);
    });
    $scope.checkUser();
  }


  // ProductFactory.index(function(data){
  //   $scope.products = data;
  // })
  // OrderFactory.index(function(data){
  //   $scope.orders = data;
  //   for(var i=0; i<$scope.orders.length; i++){
  //     var date = new Date($scope.orders[i].createdAt);
  //     $scope.orders[i].createdAt = date.toDateString();
  //   }
  // })
  // CustomerFactory.index(function(data){
  //   $scope.customers = data;
  //   for(var i=0; i<$scope.customers.length; i++){
  //     var diff = $scope.mstohuman($scope.customers[i].createdAt);
  //     $scope.customers[i].timeHere = diff;
  //   }
  // })
  //
  //
  //
  // $scope.displayPicNum = 4;
  // $scope.updatePicNum = function(){
  //   $scope.displayPicNum += 4;
  // }
  // $scope.show = true;
  // $scope.orderNum = 3;
  // $scope.updateOrderNum = function(){
  //   if($scope.show){
  //     $scope.orderNum = $scope.orders.length;
  //     $scope.show = false;
  //   }
  //   else{
  //     $scope.orderNum = 3;
  //     $scope.show = true;
  //   }
  // }
  // $scope.showCust = true;
  // $scope.custNum = 3;
  // $scope.updateCustNum = function(){
  //   if($scope.showCust){
  //     $scope.custNum = $scope.customers.length;
  //     $scope.showCust = false;
  //   }
  //   else{
  //     $scope.custNum = 3;
  //     $scope.showCust = true;
  //   }
  // }
  //

}); //closes DashController
