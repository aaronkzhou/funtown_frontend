'use strict';
angular.module('manage').controller('ManageController', ['$scope','$log','$state','ProductsListService', 
	function($scope,$log,$state,ProductsListService){		
		var productCountList = [];

		function init(){
			$log.debug("ManageController::init",ProductsListService);

			ProductsListService.getProductCount().then(function(response){				
				productCountList = response;
			})
		}

		$scope.getProductCount = function(statusCode){
			return productCountList.filter(function(product){
				return product.statusCode === statusCode;
			})[0]
		}

		init();
	}
])