'use strict';
angular.module('funtown').service('ProductsListService', ['$log','$http', 
	function($log,$http){
		$log.debug('ProductsListService');

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
						$log.debug('response.data',response.data)
						return response.data;
			})
					
		}

	}
])