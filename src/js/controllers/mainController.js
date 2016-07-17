angular
.module('GitSearcher')
.controller('MainController', MainController);

MainController.$inject = ['$http', '$state', '$stateParams', 'API'];
function MainController($http, $state, $stateParams, API){

  var self = this;

  self.searchInput      = null;
  self.error            = null;
  self.message          = null;
  self.searchResults    = null;

  // default values
  self.perPage          = 30;
  self.searchOrder      = "desc";

  // post search variables
  self.searchInputUsed  = null;
  self.currentPage      = null;

  // Functions
  self.search     = search;
  self.newSearch  = newSearch;

  function newSearch(){
    // Test for invalid searches;
    if (/\S/.test(self.searchInput) && self.searchInput !== null){

      self.searchUsed = true;

      // Set variables for pagination
      self.currentPage      = 1;
      self.searchInputUsed  = self.searchInput;
      self.perPageUsed      = self.perPage;
      self.searchOrderUsed  = self.searchOrder;
      self.totalPages       = null;
      self.currentPage      = 1;

      search(1, self.searchInput, self.perPage, self.searchOrder);
    } else {
      self.message = "Invalid search- please input a term to search for";
    }
  }

  function search(pageNo, searchInput, perPage, searchOrder){
    self.message = "Searching...";
    self.searchResults = null;

    $http.get( API + "search/users", {
      params: {
        q: searchInput,
        order: searchOrder,
        page: pageNo,
        per_page: perPage
      },
    }).then(function(res){
      // Reset messages
      self.message = null;
      self.error = null;

      // Assign response data
      self.searchResults = res.data;

      // Resolve pagination
      self.totalPages = Math.ceil(self.searchResults.total_count / self.perPage);
      self.currentPage = pageNo;
      if (self.totalPages > 1){
        self.pageArray = new Array(self.totalPages);
        self.message = "Showing page " + self.currentPage + " of " + self.totalPages;
      } else {
        self.pageArray = null;
      }
      // Error messages
      if (self.searchResults.items.length < 1){
        self.message = "Your search yielded no results";
      }
    }, function(res){
      // Error in request- console logging error and sending as error, and error handling for 1k search limits
      if (res.data.message === "Only the first 1000 search results are available"){
        self.message = "Unfortunately, the github API only serves the first 1k search results. Try an earlier page!";
        self.searchResults = null;
      } else {
        self.message = null;
        self.error = res.data;
        console.log("error res", res);

      }
    });
  }
}
