'use strict';
angular.module('selling').controller('AddProduct', ['$log','$scope','$http','$state','$stateParams','ProductService','AlertsService',
	function($log,$scope,$http,$state,$stateParams,ProductService,AlertsService) {
		var STEP_NO=0;
		$log.debug("AddProduct controller");
		
		function init(){		
			$log.debug('AddProduct controller::init');
			
			//Render the child view
			if($state.current.name==='manage.addProduct'){
				$state.go("manage.addProduct.step1");
			}
			
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
				$scope.specifyProduct = response.data;
			});
		}
		
		$scope.updoStepCompleted = function(step){
			$scope.stepsCompleted = step-1;	
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

		$scope.hasShippingTemplate = function(){
			return $scope.cache.state.shippingType === "template";
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
			$scope.cache.product.status="IN_DRAFT";
			$scope.cache.product.draftStage = $scope.stepsCompleted;
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
			var progressAlert = AlertsService.notify("Saving product...");
			ProductService.saveProduct($scope.cache.product).then(function(response){
				$scope.cache.product.productId = response.data;
				progressAlert.hide();
				AlertsService.notify("Product added.","success");
				$state.go('manage.products.' + $scope.cache.product.status);
			},function(error){
				$log.error(error);
				progressAlert.hide();
				AlertsService.notify("Unable to save product.","error");
			})	
		}

		$scope.getSpecifyProduct = function(){
			$log.debug("get specify product info");
			ProductService.getSpecifyProduct(pid).then(function(response){
				return response.data;
			})
		}

		init();
 	}
])