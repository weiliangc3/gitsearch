angular
.module('GitSearcher')
.controller('UserController', UserController);

UserController.$inject = ['$http', '$state', '$stateParams', 'API'];
function UserController($http, $state, $stateParams, API){

  var self = this;

  self.username = $stateParams.username;

  console.log("Getting user");

  getUser();

 function getUser(){
    self.message = "Searching...";
    self.searchResults = null;

    $http.get( API + "users/" + self.username)
    .then(function(res){
      // --REMOVE FOR DEPLOYMENT--
      console.log("firstres.data", res.data);

    }, function(res){

    });
  }

}
