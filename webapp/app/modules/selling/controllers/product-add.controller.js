'use strict';
angular.module('selling').controller('AddProduct', ['$log','$scope','$http','$state','$stateParams','ProductService','AlertsService','editProduct',
	function($log,$scope,$http,$state,$stateParams,ProductService,AlertsService,editProduct) {
		var STEP_NO=0;
		$log.debug("AddProduct controller");
		
		function init(){
			$log.debug('AddProduct controller::init',editProduct);
			$scope.title = $stateParams.mode;
			$scope.headTitle = $stateParams.mode + " Product";
			//Render the child view
			if($state.current.name==='manage.addProduct'){
				$state.go("manage.addProduct.step1");
			}
			$scope.alertMessage={};
			$scope.alertMessage.confirm = 
			{
				message: "You will lose all unsaved changes.",
			  	buttons:[
			  		{name:'Yes',action:"cancelChanges"},
			  		{name:'No'}
			  	]
			};
			//Cache object
			$scope.cache = {}			
			//Cache product
			$scope.cache.product = editProduct;		
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
			$scope.pid = $state.params.pid;
			if($scope.pid){

				if($scope.cache.product.shippingCosts.filter.length == 0){
					$scope.cache.state.pickUp = "noPickUp";
				}
				if($scope.cache.product.shippingCosts.length == 1 && $scope.cache.product.shippingCosts[0].description == "pickUp"){
					$scope.cache.state.pickUp = "mustPickup";
				}
				if(($scope.cache.product.shippingCosts.length > 1 && $scope.cache.product.shippingCosts.filter.length !== 0) || $scope.cache.product.shippingTemplateId !== null){
					$scope.cache.state.pickUp = "canPickUp";
				}
				if($scope.cache.product.shippingCosts.length == 0 && $scope.cache.product.shippingTemplateId !== null){
					$scope.cache.state.shippingType = "template";
				}
				if($scope.cache.product.shippingCosts.length == 0 && $scope.cache.product.shippingTemplateId == null){
					$scope.cache.state.shippingType = "free";
				}
				if($scope.cache.product.shippingCosts.length !== 0 && $scope.cache.product.shippingTemplateId == null){
					$scope.cache.state.shippingType = "specific";
				}
				if($scope.cache.product.draftStage){
					$scope.stepsCompleted = $scope.cache.product.draftStage
				}else{
					$scope.stepsCompleted =6;
				}
				$scope.cache.state.shippingCosts = $scope.cache.product.shippingCosts.filter(function(item){
					return item.description !== "pickUp";
				})
			}
			

			function checkNoPickUp(shippingCost){
				return shippingCost.cost == 0 && shippingCost.description == "pickUp";
			}
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
			}else if($scope.pid){
				$state.go('manage.editProduct.step1').then(function(){
					$state.reload();
				});
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

		$scope.update = function(){
			$log.debug("update");
			var progressAlert = AlertsService.notify("Updating product...");
			ProductService.updateProduct($scope.cache.product).then(function(response){
				$scope.cache.product.productId = response.data;
				progressAlert.hide();
				AlertsService.notify("Product added.","success");
				$state.go('manage.products.' + $scope.cache.product.status);
				console.log($scope.cache.product);
			},function(error){
				$log.error(error);
				progressAlert.hide();
				AlertsService.notify("Unable to save product.","error");
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
				console.log($scope.cache.product);
			},function(error){
				$log.error(error);
				progressAlert.hide();
				AlertsService.notify("Unable to save product.","error");
			})	
		}
		init();
 	}
])