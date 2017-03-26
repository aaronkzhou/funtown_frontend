'use strict';
angular.module('selling').controller('ProductsList', ['$log','$scope','$state','ProductsListService','products','$stateParams',
	function($log,$scope,$state,ProductsListService,products,$stateParams){
		$log.debug("ProductsList controller::init");
		$scope.products = products;
		$scope.btnIsVisible = true;
		$scope.productsChosen = [];
        $scope.mode = $stateParams.activateMode;
        var deactivateProducts = [];
        var activateProducts = [];

		function init(){
            if($scope.products.length !== 0){
			     var status = $scope.products[0].status;
            }
			if(status === "In-Draft"){
				$scope.btnIsVisible = false;
			}
			$scope.alertMessage={};
			$scope.alertMessage.confirm = {
				message: "You want to delete the selected products permanently.",
			  	buttons:[
			  		{name:'Yes',action:"deleteProducts"},
			  		{name:'No'}]
			};

		}

		$scope.changeSelectedProducts = function(product){	
		$log.debug('changeSelectedProducts');		
			//select one product
			if(product.selected === true && $scope.productsChosen.indexOf(product) === -1){
				$scope.productsChosen.push(product);
				$log.debug('SelectedProducts',$scope.productsChosen);
				//select all products
				if($scope.productsChosen.length === $scope.products.length){
					$scope.chooseAll = true;
				}			
			}//unselect products
			else if(product.selected === false && $scope.productsChosen.indexOf(product) !== -1){
				$scope.productsChosen.splice($scope.productsChosen.indexOf(product),1);
				//$scope.chooseAll = false;
				$log.debug('SelectedProducts',$scope.productsChosen);
			}			
		}

		$scope.selectAll = function(){
			if($scope.productsChosen.length === $scope.products.length){
				$scope.productsChosen = [];
				$log.debug('unselectAll',$scope.productsChosen);
			}else {
				$scope.productsChosen = $scope.products;
				$log.debug('selectAll',$scope.productsChosen);
			}
		}

		$scope.refreshTabs = function(){
			$log.debug('refreshTabs');
			$scope.tabs = ProductsListService.getProductCount();
			$log.debug('tabs',$scope.tabs)
		}
		
		$scope.activateProduct = function(){
			$log.debug('activateProduct',$scope.productsChosen);
			$scope.productsChosen.forEach(function(product){
				if(product.status !== "Selling"){
					$scope.products.splice($scope.products.indexOf(product),1);
					//$scope.chooseAll = false;
					activateProducts.push({productId:product.productId});
				}else{					
					alert("they are already active.");
					event.preventDefault();
				}
			});	
			ProductsListService.activateProduct(activateProducts);
			$scope.productsChosen = [];
			$scope.refreshTabs();
			
		}

		$scope.deactivateProduct = function(){
			$log.debug('deactivateProduct',deactivateProducts);
			$scope.productsChosen.forEach(function(product){
				if(product.status !== "De-Active"){
					$scope.products.splice($scope.products.indexOf(product),1);
					//$scope.chooseAll = false;
					deactivateProducts.push({productId:product.productId});
				}else{					
					alert("they are already deactive.");
					event.preventDefault();
				}
			});	
			ProductsListService.deactivateProduct(deactivateProducts);
			$scope.productsChosen = [];
			$scope.refreshTabs();
		}
		//since use the same confirm alert, function"cancelChanges" is equal to function"deleteProducts".
		$scope.cancelChanges = function(){
			$scope.deleteProducts();
			$scope.refreshTabs();			
		}
		
		$scope.deleteProducts = function(){
			$log.debug('deleteProducts',$scope.productsChosen);
			$scope.productsChosen.forEach(function(product){
				$scope.products.splice($scope.products.indexOf(product),1);
				ProductsListService.deleteProducts(product.productId);
				$scope.chooseAll = false;
			});
			$scope.productsChosen = [];	
			$scope.refreshTabs();		
		}

		$scope.editProduct = function(productId){
			$log.debug('editProduct',productId);
			$state.go("manage.editProduct.step1",{pid:productId})
		}
        $scope.checkLength = function(productsChosen){
            return productsChosen.length === 0;
        }
        $scope.getProductCount = function(){
            return $scope.products.length == 0?false:true;
        }

		init();
	}
])