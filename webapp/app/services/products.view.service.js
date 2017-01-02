'use strict';
angular.module('funtown').service('ProductsViewService', ['$log','$http', 
	function($log,$http){
		$log.debug('ProductsViewService');

		this.getTablist = function(){
			$log.debug('getTablist');
			return $http.get('/rest/api/selling/products/count')
					.then(function(response){
						return response.data;
					});
		}

		//get products of different status
		this.getProductsOfStatus = function(statusName){
			$log.debug('getProductsOfStatus',statusName);

			return $http.get('/rest/api/selling/products?status=' + statusName)
					.then(function(response){
						return response.data;
			})
					$log.debug('$scope.products',$scope.products)
		}

		//get count of different status
		this.getCountOfStatus = function(statusName){
			$log.debug('getCountOfStatus',statusName);

			return $http.get('/rest/api/selling/products/count')
					.then(function(response){
						return response.data.find(function(statusCount){
									return statusCount.statusCode === statusName;
								}).productCount;
			})
		}
	}
])