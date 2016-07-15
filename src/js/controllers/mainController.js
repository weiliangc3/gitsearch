angular
.module('GitSearcher')
.controller('MainController', MainController);

MainController.$inject = ['$http', '$state', '$stateParams', 'API'];
function MainController($http, $state, $stateParams, API){

  var self = this;

  self.searchInput = null;
  self.searchOrder = "desc";

  self.search = search;


  function search(){
    console.log("searchinput", self.searchInput);

    $http.get( API + "search/users", {
      params: {
        q: self.searchInput,
        order: self.searchOrder,
      },
    }).then(function(res){
      console.log("firstres", res);
    }, function(res){
      console.log("error res", res);
    });


  }

}
