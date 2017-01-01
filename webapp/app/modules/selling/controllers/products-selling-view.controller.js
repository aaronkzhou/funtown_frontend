'use strict';
angular.module('selling').controller('ProductsSellingView',['$log', '$scope','ProductsViewService', 
	function($log,$scope,ProductsViewService){
		$log.debug('ProductsSellingView');
		
		$scope.productsChosen = [];

		function init(){
			ProductsViewService.getProductsOfStatus("ACTIVE")
			.then(function(response){
				$scope.products.active = response;
			});
			ProductsViewService.getCountOfStatus("ACTIVE")
			.then(function(response){
				$scope.products.activeCount = response;
			})

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
				$scope.products.active.find(function(product){
					return product.productId === productId;
				}).status = toStatus;
			});
			
			$scope.productsChosen = [];
		}

		$scope.deleteProducts = function(){
			$log.debug('deleteProducts',$scope.productsChosen);

			$scope.productsChosen.forEach(function(productId){
				var productDelete = $scope.products.active.find(function(product){
					return product.productId === productId;
				});
				$scope.products.active.splice($scope.products.active.indexOf(productDelete));
			});

			$scope.productsChosen = [];
		}

		init();
		
	}
])