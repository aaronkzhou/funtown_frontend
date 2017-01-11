'use strict';
angular.module('funtown').service('ProductsListService', ['$log','$http', 
	function($log,$http){
		$log.debug('ProductsListService');

		this.getProductCount = function(){
			$log.debug('getProductCount');
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
			});					
		}

		this.activateProduct = function(product){
			$log.debug('ProductsListService-activateProduct',product);
		}

		this.deactivateProduct = function(product){
			$log.debug('ProductsListService-deactivateProduct',product);
		}

		this.deleteProducts = function(product){
			$log.debug('ProductsListService-deleteProducts',product);
		}

	}
])