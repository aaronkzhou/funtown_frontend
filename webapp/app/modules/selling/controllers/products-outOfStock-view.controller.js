'use strict';
angular.module('selling').controller('ProductsOutOfStockView',['$log', '$scope','ProductsViewService', 
	function($log,$scope,ProductsViewService){
		$log.debug('ProductsOutOfStockView');
		
		function init(){
			ProductsViewService.getProductsOfStatus("OUT_OF_STOCK")
			.then(function(response){
				$scope.products.outOfStock = response;
			});
			ProductsViewService.getCountOfStatus("OUT_OF_STOCK")
			.then(function(response){
				$scope.products.outOfStockCount = response;
			});
		}
		init();
		
	}
])