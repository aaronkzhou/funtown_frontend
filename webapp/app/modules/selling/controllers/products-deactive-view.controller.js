'use strict';
angular.module('selling').controller('ProductsDeactiveView',['$log', '$scope','ProductsViewService', 
	function($log,$scope,ProductsViewService){
		$log.debug('ProductsDeactiveView');
		
		$scope.productsChosen = [];

		function init(){
			ProductsViewService.getProductsOfStatus("DE_ACTIVE")
			.then(function(response){
				$scope.products.deactive = response;
			});			
			ProductsViewService.getCountOfStatus("DE_ACTIVE")
			.then(function(response){
				$scope.products.deactiveCount = response;
			});
		}

		$scope.changeSelectedProducts = function(product){
			//select one product
			if(product.selected === true && $scope.productsChosen.indexOf(product.productId) === -1){
				$scope.productsChosen.push(product.productId);
				$log.debug('SelectedProducts',$scope.productsChosen);	
			//unselect products
			}else if(product.selected === false && $scope.productsChosen.indexOf(product.productId) !== -1){
				$scope.productsChosen.splice($scope.productsChosen.indexOf(product.productId));
				$log.debug('unSelectedProducts',$scope.productsChosen);
			}			
		}

		$scope.activateProduct = function(){
			changeProductStatus("ACTIVE");
		}

		$scope.deactivateProduct = function(){
			changeProductStatus("DE_ACTIVE");
		}
		
		function changeProductStatus(toStatus){
			$log.debug('changeProductStatus to', toStatus);

			$scope.productsChosen.forEach(function(productId){
				$scope.products.deactive.find(function(product){
					return product.productId === productId;
				}).status = toStatus;
			});
		}

		$scope.deleteProducts = function(){
			$log.debug('deleteProducts',$scope.productsChosen);

			$scope.productsChosen.forEach(function(productId){
				var productDelete = $scope.products.deactive.find(function(product){
					return product.productId === productId;
				});
				$scope.products.deactive.splice($scope.products.deactive.indexOf(productDelete));
			});
		}

		init();
		
	}
])