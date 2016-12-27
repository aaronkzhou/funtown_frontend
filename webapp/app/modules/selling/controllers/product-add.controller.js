'use strict';
angular.module('selling').controller('AddProduct', ['$log','$scope','$http',
	function($log,$scope,$http) {	
		var STEP_NO=0;
		$log.debug("AddProduct controller");
		
		function init(){		
			$log.debug('AddProduct controller::init');

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

		$scope.resetProduct = function(){
			$scope.cache.product = {};
		}

		$scope.cancel = function(){
			$log.debug("cancel");
			$scope.cache.product = {};		
			$scope.cache.state.categoryPath = [
				{
					categoryId:0,
					categoryName:'All categories'
				}
			];	
		}

		$scope.saveDraft = function(){
			$log.debug("saveDraft");
			$log.debug("product",$scope.cache.product);

			var productAttributes = [];	
			var product = JSON.parse(JSON.stringify($scope.cache.product));

			var productAttributesObj =  $scope.cache.product.productAttributes;

			for(var property  in productAttributesObj){
				productAttributes.push({attributeType:property,attributeValue:productAttributesObj[property]});
			}
			product.productAttributes = productAttributes;
			product.productPriceDetails = [$scope.cache.product.productPriceDetails];
			product.catalog.category = $scope.cache.product.category;
			delete product.category
			productAttributesObj = null;
			
			$log.debug("request",product);
			// var paymentMethods = [];	
			// $scope.cache.product.paymentMethods.map(function(paymentMethod)){
			// 	if(paymentMethod.selected){
			// 		paymentMethods.push({paymentMethodId:paymentMethod.attributeId})
			// 	}
			// };
			


			$http.post('/rest/api/product',product).then(function(response){
				$log.debug("saveDraft::response : ",response);
			})
		}

		init();
	
 	}
])