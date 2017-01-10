'use strict';
angular.module('selling').controller('AddProduct', ['$log','$scope','$http','$state','$stateParams','ProductService','AlertsService',
	function($log,$scope,$http,$state,$stateParams,ProductService,AlertsService) {
		var STEP_NO=0;
		$log.debug("AddProduct controller");
		function init(){		
			$log.debug('AddProduct controller::init');
			$scope.title = $stateParams.title;
			$scope.upperTitle = $stateParams.title.charAt(0).toUpperCase() + $stateParams.title.slice(1);
			$scope.alertMessage={};
			$scope.alertMessage.confirm = "You will lose all unsaved changes."
			//Cache object
			$scope.cache = {}			
			//Cache product
			$scope.cache.product = {};			

			//Cache states across steps
			$scope.cache.state = {};

			$scope.cache.state.catalogType = 'auto';
			$scope.cache.state.selectedCatalog = null;
			$scope.cache.state.productAttributes = [];

			$scope.stepsCompleted =STEP_NO;
			// root category. The root categories have a parentId of zero 0
			$scope.cache.state.categoryPath = [
				{
					categoryId:0,
					categoryName:'All categories'
				}
			];
			$scope.pickUps = [
				{value: 'noPickUp', display: "No pick-up"},
				{value: 'canPickUp', display: "Buyer can pick-up"},
				{value: 'mustPickup', display: "Buyer must pick-up"}
			];
			ProductService.getSpecifyProduct($state.params.pid).then(function(response){
				$scope.cache.product = response.data;
			});
		}
		
		$scope.updoStepCompleted = function(step){
			$scope.stepsCompleted = step - 1;	
		}		

		$scope.stepCompleted = function(step){
			if($scope.stepsCompleted < step){
				$scope.stepsCompleted = step;	
			}
		}

		$scope.isStepDeactive = function(step){
			return step > $scope.stepsCompleted+1;
		}

		$scope.isDraftDisabled = function(){
			return $scope.stepsCompleted < 2;
		}

		$scope.resetProduct = function(){
			$scope.cache.product = {};
		}


		$scope.hasSpecificShipping = function(){
			return $scope.cache.state.shippingType === "specific";
		}


		$scope.hasFreeShipping = function(){
			return $scope.cache.state.shippingType === "free";
		}

		$scope.cancelChanges = function(){
			$log.debug("cancelChanges");
			$log.debug("currentstate ",$state.current.name)
			
			$scope.cache.product = {};
			$scope.cache.state = {};		
			$scope.cache.state.catalogType = 'auto';
			$scope.cache.state.categoryPath = [
				{
					categoryId:0,
					categoryName:'All categories'
				}
			];	
			$log.debug("$scope.cache.product",$scope.cache)
			if($state.current.name ==="manage.addProduct.step1"){
				$state.reload();	
			}else{
				$state.go('manage.addProduct.step1');
			}
			
		}

		$scope.saveDraft = function(){
			$log.debug("saveDraft");
			var progressAlert = AlertsService.notify("Saving as draft...");
			ProductService.saveProduct($scope.cache.product).then(function(response){
				$scope.cache.product.productId = response.data;
				progressAlert.hide();
				AlertsService.notify("Product draft saved.","success");
			},function(error){
				$log.error(error);
				progressAlert.hide();
				AlertsService.notify("Unable to save as draft.","error");
			})			
		}


		$scope.create = function(){
			$log.debug("create");
			console.log($scope.cache.product);
			ProductService.saveProduct($scope.cache.product).then(function(response){
				$state.go('manage.products.' + $scope.cache.product.status);
				console.log($scope.cache.product);

			});			
			if($scope.cache.state.photosFlow){
				$scope.cache.state.photosFlow.upload();
			}
		}

		init();
 	}
])