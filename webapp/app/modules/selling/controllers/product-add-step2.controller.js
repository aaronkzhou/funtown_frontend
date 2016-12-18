'use strict';
angular.module('selling').controller('AddProductStep2', ['$log','$scope','$http','AddProductService',
	function($log,$scope,$http,AddProductService) {
		var STEP_NO = 2;
		$log.debug('AddProductStep2 controller');
		$log.debug('AddProductStep2',$scope.product.catalog);
		
		if($scope.product.category){
			var selectedCategory = $scope.product.category.categoryId;
			$scope.selectedCatalog = {};
		}

		$scope.getCatalogue = function(viewValue) {
			var params = viewValue;
			return $http.get('/rest/api/catalogues/search?catId=' + selectedCategory + '&title=' + params)
			.then(function(response){
				return response.data;		
			})
		}
		
		$scope.showCatalogDetail = function(){
			$scope.updoStepCompleted(STEP_NO);
			$http.get('/rest/api/catalogues/' + $scope.selectedCatalog.catalogId)
			.then(function(response){
					$scope.product.catalog = response.data;						
					$scope.stepCompleted(STEP_NO);									
			})
		}

		$scope.catalogTypeChange = function(){
			$scope.product.catalog = null;
			$scope.selectedCatalog = {};
		}

		$scope.showAutoDetails = function(){
			$log.debug("showAutoDetails ",$scope.product.catalogType);
			return $scope.product.catalogType === 'auto' && $scope.product.catalog;	
		}

		$scope.showManualDetails = function(){
			$log.debug("showManualDetails ",$scope.product.catalogType);
			return $scope.product.catalogType === 'manual';	
		}

		// check if the next button should be enabled
		$scope.isNextDisabled = function(){
			return !($scope.product.catalog);
		}

		//check if the catalogue has been chosen
		$scope.hasCatalogue = function(){
			return $scope.product.catalog; 
		}

	 }
])