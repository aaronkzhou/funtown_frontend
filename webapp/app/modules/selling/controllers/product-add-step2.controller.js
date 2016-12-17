'use strict';
angular.module('selling').controller('AddProductStep2', ['$log','$scope','$http','AddProductService',
	function($log,$scope,$http,AddProductService) {
		$log.debug('AddProductStep2 controller');
		$log.debug('AddProductStep2',$scope.product.category);

		var selectedCategory = $scope.product.category.categoryId;
		$scope.selectedCatalogue = '';

		$scope.getCatalogue = function(viewValue) {
			var params = viewValue;
			return $http.get('/rest/api/catalogues/search?catId=' + selectedCategory + '&title=' + params)
			.then(function(response){
				return response.data;		
			})
		}
		
		$scope.showDetail = function(){
			$scope.updoStepCompleted(2);
			$http.get('/rest/api/catalogues/' + $scope.selectedCatalogue.catalogId)
				.then(function(response){		
				if($scope.product.catalogueDetail){
					$scope.product.catalogueDetail = [];
				}				
					$scope.product.catalogueDetail = response.data;
					$scope.stepCompleted(2);									
			})
		}

		// check if the catalogue has been chosen
		$scope.isCatalogue = function(){
			return $scope.product.catalogueDetail; 
		}

		// check if the next button should be enabled
		$scope.isNextDisabled = function(){
			return !($scope.product.catalogueDetail && $scope.product.catalogueDetail[0].catalogId);
		}
	 }
])