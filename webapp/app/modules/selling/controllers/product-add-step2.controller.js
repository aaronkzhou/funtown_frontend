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
			$http.get('/rest/api/catalogues/' + $scope.selectedCatalogue.catalogId)
			.then(function(response){
				$scope.catalogueDetail.push(response.data[0]);
			})
		}

		$scope.isCatalogue = function(selectedCategory){
			return $scope.selectedCatalogue.title && $scope.selectedCatalogue.catalogId; 
		}
	}
])