'use strict';
angular.module('selling').controller('AddProductStep5', ['$log','$scope','AttributeService',
	function($log,$scope,AttributeService){
		$log.debug('AddProductStep5 controller');

		var STEP_NO = 5;		
		var pickUpOption       = {cost: 0,description: "pickUp"};
		var freeShippingOption = {cost: 0,description: "freeShipping"};
		
		function init(){
			$log.debug("AddProductStep5::init");

			// disable the inputs for adding shipping cost
			$scope.specifyDisabled = true;
			$scope.pickUps = [
				{value: 0, display: "No pick-up"},
				{value: 1, display: "Buyer can pick-up"},
				{value: 2, display: "Buyer must pick-up"}
			]

			if($scope.cache.product.category){
				$scope.shippingRates = AttributeService.getAttributesFor('shippingRates',$scope.cache.product.category.categoryId);
				$log.debug($scope.shippingRates);
			}else{
				$log.warn("Category not yet set.");
			}

			//hide shipping options if chose "must pick-up" in last version
			if($scope.cache.allowPickUp === 2){
				$scope.mustPickUp = true;
			}	
		}

		// check if allow pick up only
		$scope.checkPickUp = function(){
	//		$log.debug($scope.cache.product.shippingCosts.indexOf(pickUpOption))

			if($scope.cache.allowPickUp === 0){
				$scope.removeShippingOptionFromProduct(pickUpOption);
				$scope.mustPickUp = false;
				}
				// can pick-up and pickUpOption is not existed in product
				else if($scope.cache.allowPickUp === 1){
					if($scope.cache.product.shippingCosts.indexOf(pickUpOption) === -1){
						$scope.addShippingOptionToProduct(pickUpOption);
					}					
					$scope.mustPickUp = false;										
				}
				else if($scope.cache.allowPickUp === 2){
					//hide other shipping options
					$scope.mustPickUp = true;
					//reset the shippintType to prevent adding costs to product from specify
					$scope.cache.shippingType = "";
					$scope.resetShippingOptionToProduct();
					$scope.addShippingOptionToProduct(pickUpOption);
				}
		}

		$scope.addShippingOptionToProduct = function(shippingOption){
			$scope.cache.product.shippingCosts.push(shippingOption);
		}

		$scope.removeShippingOptionFromProduct = function(shippingOption){
			var shippingOptionIndex = $scope.cache.product.shippingCosts.indexOf(shippingOption);
			if(shippingOptionIndex !== -1){
				$scope.cache.product.shippingCosts.splice(shippingOptionIndex,1);
			}
		}

		$scope.resetShippingOptionToProduct = function(){
			$scope.cache.product.shippingCosts = [];
		}

		$scope.filterShippingOptionToProduct = function(){
			$scope.cache.product.shippingCosts = $scope.cache.product.shippingCosts.filter(function(shippingOption){
				return shippingOption.description === "pickUp";
			})
		}

		$scope.processFreeShipping = function(){
			//remove all specify costs in cache.product
			$scope.filterShippingOptionToProduct();
			$scope.addShippingOptionToProduct(freeShippingOption);
			$scope.specifyDisabled = true;
		}

		$scope.processSpecifyCost = function(){
			$scope.specifyDisabled = false;
			$scope.removeShippingOptionFromProduct(freeShippingOption);
			
		}

		$scope.addShippingCost = function(){
			$scope.cache.shippingCosts.push({});
		}

		$scope.removeShippingCost = function(shippingCost){
			var index = $scope.cache.shippingCosts.indexOf(shippingCost);
			$scope.cache.shippingCosts.splice(index, 1);
		}

		// when click "save" or "next", join the "cache.shippingCosts" into product
		$scope.joinShippingCosts = function(){
			if($scope.cache.shippingCosts[0].cost && $scope.cache.shippingType === "specify"){
				//filter for the distinct costs options
				$scope.cache.distinctCosts = $scope.cache.shippingCosts.filter(function(shippingCost){
					return $scope.cache.product.shippingCosts.indexOf(shippingCost) === -1;
				})
				$scope.cache.product.shippingCosts = $scope.cache.product.shippingCosts.concat($scope.cache.distinctCosts);
				}			
		}

		//check if free shipping or specify costs are required
		$scope.check = function(){
			$log.debug("check", $scope.cache.allowPickUp, "type",$scope.cache.shippingType)
			if(($scope.cache.allowPickUp == 0 || $scope.cache.allowPickUp == 1) && !$scope.cache.shippingType){
				return true;
			}
		}
	  
		init();
	}

])