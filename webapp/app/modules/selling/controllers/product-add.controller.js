'use strict';
angular.module('selling').controller('AddProduct', ['$log','$scope','$http','ProductService',
	function($log,$scope,$http,ProductService) {	
		var STEP_NO=0;
		$log.debug("AddProduct controller");
		
		function init(){		
			$log.debug('AddProduct controller::init');

			//Cache object
			$scope.cache = {}			
			//Cache product
			$scope.cache.product = {};
			$scope.cache.product.status = "in-draft";

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
			]
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

		$scope.cancel = function(){
			$log.debug("cancel");
			$scope.cache.product = {};
			$scope.cache.state = {};		
			$scope.cache.state.categoryPath = [
				{
					categoryId:0,
					categoryName:'All categories'
				}
			];	
		}

		$scope.saveDraft = function(){
			$log.debug("saveDraft");
			ProductService.saveProduct($scope.cache.product).then(function(response){
				$scope.cache.product.productId = response.data;
			})			
		}

		init();
	
 	}
])