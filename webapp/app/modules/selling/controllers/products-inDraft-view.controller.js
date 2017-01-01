'use strict';
angular.module('selling').controller('ProductsInDraftView',['$log', '$scope','ProductsViewService', 
	function($log,$scope,ProductsViewService){
		$log.debug('ProductsInDraftView');
		
		function init(){
			ProductsViewService.getProductsOfStatus("IN_DRAFT")
			.then(function(response){
				$scope.products.inDraft = response;
			});
			ProductsViewService.getCountOfStatus("IN_DRAFT")
			.then(function(response){
				$scope.products.inDraftCount = response;
			})

		}
		init();
		
	}
])