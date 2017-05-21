'use strict';
angular.module('buying').controller('searchResultController', ['$log','$scope', 'AuthService','$state','AlertsService','$http',
	function($log,$scope,AuthService,$state,AlertsService,$http){
		$log.debug("searchResultController");
    var productDetails = [];
    var productInfo = [];
		function init(){
      $scope.searchResult = {};
      $scope.searchResult.title = "iron";
      $scope.searchResult.categoryName = "Blu-ray";
      $scope.searchResult.buyNowPrice = "15";
      $scope.searchResult.starring = "James McAvoy,Michael Fassbender";
      $scope.searchResult.director = "Bryan Singer";
      $scope.searchResult.runtime = "144 mins";
      // $state.go("MainController",{:});



		}



    init();
	}
])
