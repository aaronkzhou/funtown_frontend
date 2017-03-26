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

		this.activateProduct = function(activateProducts){
			$log.debug('ProductsListService-activateProduct',activateProducts);
			return $http.put('/rest/api/selling/products/update?status=ACTIVE', activateProducts)
					.then(function(response){
						return response.data;
					})
		}

		this.deactivateProduct = function(deactivateProducts){
			$log.debug('ProductsListService-deactivateProduct',deactivateProducts);
			return $http.put('/rest/api/selling/products/update?status=DE_ACTIVE', deactivateProducts)
					.then(function(response){
						return response.data;
					})
		}

		this.deleteProducts = function(productId){
			$log.debug('ProductsListService-deleteProducts',productId);
			return $http.delete('/rest/api/selling/products/' + productId)
					.then(function(response){
						return response.data;
					})
		}

	}
])