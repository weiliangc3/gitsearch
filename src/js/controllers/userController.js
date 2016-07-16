angular
.module('GitSearcher')
.controller('UserController', UserController);

UserController.$inject = ['$http', '$state', '$stateParams', 'API'];
function UserController($http, $state, $stateParams, API){

  var self = this;

  self.username = $stateParams.username;

  console.log("Getting user");

  getUser();
  getRepos();

 function getUser(){
    self.message = "Searching...";
    self.searchResults = null;

    $http.get( API + "users/" + self.username)
    .then(function(res){

      self.user = res.data;

    }, function(res){
      // Sending error to console (?)Remove for deployment
      console.log("GetUser Error", res.data);
    });
  }

  function getRepos(){
    $http.get(API + "users/" + self.username + "/repos")
    .then(function(res){
      self.repos = res.data;

      // Sorting repos by stargazer count
      self.repos.sort(function(a,b) {return (a.stargazers_count > b.stargazers_count) ? 1 : ((b.stargazers_count > a.stargazers_count) ? -1 : 0);} );

      // Pull out top 3
      self.topRepos = [self.repos[1], self.repos[2], self.repos[3]];
    },function(res){
      // Sending error to console (?)Remove for deployment
      console.log("getRepo Error", res.data);
    });
  }

}
