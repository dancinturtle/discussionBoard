var discussionBoard = angular.module('discussionBoard', ['ngRoute']);

discussionBoard.config(function($routeProvider) {
  $routeProvider
  .when('/',{
    templateUrl: 'partials/login.html'
  })
  .when('/dashboard', {
    templateUrl: 'partials/dashboard.html'
  })
  .when('/topic/:number', {
    templateUrl: 'partials/topic.html'
  })
  .when('/profile/:user', {
    templateUrl: 'partials/profile.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
