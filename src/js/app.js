angular
  .module('GitSearcher', ['ui.router'])
  .constant('API', 'https://api.github.com/')
  .config(MainRouter);


MainRouter.$inject = ['$stateProvider','$urlRouterProvider', "$locationProvider"];
function MainRouter($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "../views/statics/home.html",
      onEnter: function(){
      }
    })
    .state('user', {
      url: "/users/:userId",
      templateUrl: "../views/users/show.html",
      controller: "UserController as User",
      onEnter: function(){
      }
    });


  $urlRouterProvider.otherwise("/");
}
