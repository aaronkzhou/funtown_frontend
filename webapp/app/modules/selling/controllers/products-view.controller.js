'use strict';
angular.module('selling').controller('ProductsView', ['$log','$scope','ProductsViewService',
	function($log,$scope,ProductsViewService,products){

		$log.debug("ProductsView controller");
$log.debug('products',products)
		$scope.products = products ;

		$scope.tabs = [];

		$scope.productsChosen = [];

		function init(){
			$log.debug("ProductsView controller::init");
			$scope.getTablist();
			
		}

		//get original data from database
		$scope.getTablist = function(){
			ProductsViewService.getTablist().then(function(response){
				$scope.tabs = response;
				$scope.tabs.forEach(function(eachTab){
					eachTab.state = "manage.products." + eachTab.statusCode;
				});
			});
		}

		$scope.getProductsListOf = function(status){
			ProductsViewService.getProductsOfStatus
		}

		$scope.changeSelectedProducts = function(product){
			//select one product
			if(product.selected === true && $scope.productsChosen.indexOf(product) === -1){
				$scope.productsChosen.push(product);
				$log.debug('SelectedProducts',$scope.productsChosen);	
			//unselect products
			}else if(product.selected === false && $scope.productsChosen.indexOf(product) !== -1){
				$scope.productsChosen.splice($scope.productsChosen.indexOf(product),1);
				$log.debug('unSelectedProducts',$scope.productsChosen);
			}			
		}

		// $scope.selectAll = function(){
		// 	if()
		// }

		$scope.activateProduct = function(){
			$scope.productsChosen.forEach(function(eachProduct){

				if(eachProduct.status === 'De-Active'){
					changeProductStatus("DE_ACTIVE", "ACTIVE", eachProduct);
				}else if(eachProduct.status === 'out of stock'){
					changeProductStatus("OUT_OF_STOCK", "ACTIVE", eachProduct)
				}
				eachProduct.status = "Selling";
			})
			
		}

		$scope.deactivateProduct = function(){
			$scope.productsChosen.forEach(function(eachProduct){
				changeProductStatus("ACTIVE", "DE_ACTIVE", eachProduct);
				eachProduct.status = "De-Active";
			})			
		}
		
		function changeProductStatus(prevStatus, currentStatus, product){
			$log.debug('changeProductStatus to', currentStatus);
			$scope.products[prevStatus].splice($scope.products[prevStatus].indexOf(product),1);
			if(!$scope.products[currentStatus]){
				$scope.products[currentStatus] = [];
				$scope.products[currentStatus].push(product);
			}else{
				$scope.products[currentStatus].push(product);
			}

			$scope.products.tabs.find(function(tab){
				return tab.statusCode === prevStatus;
			}).productCount -= 1;

			$scope.products.tabs.find(function(tab){
				return tab.statusCode === currentStatus;
			}).productCount += 1;

			$scope.productsChosen = [];
		}

		// $scope.deleteProducts = function(){
		// 	$log.debug('deleteProducts',$scope.productsChosen);

		// 	$scope.productsChosen.forEach(function(product){
		// 		var productDelete = $scope.products.[product.].findIndex(function(product){
		// 			return product.productId === productId;
		// 		});
		// 		$scope.products.ACTIVE.splice(productDelete,1);
		// 	});

		// 	$scope.productsChosen = [];
		// }

		init();
	}
])