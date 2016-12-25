'use strict';
angular.module('selling').controller('AddProductStep5', ['$log','$scope','AttributeService',
	function($log,$scope,AttributeService){
		$log.debug('AddProductStep5 controller');

		var STEP_NO = 5;		
		var pickUpOption       = {cost: 0,description: "pickUp"};
		var freeShippingOption = {cost: 0,description: "freeShipping"};
		
		function init(){
			$log.debug("AddProductStep5::init");

			if($scope.cache.product.category){
				$scope.shippingRates = AttributeService.getAttributesFor('shippingRates',$scope.cache.product.category.categoryId);
			}else{
				$log.warn("Category not yet set.");
			}			
			
			//Add inital object if not present
			if(!$scope.cache.product.shippingCosts){
				//Shipping options in final product
				$scope.cache.product.shippingCosts = [];
				//Shipping cost options added by user - state level
				$scope.cache.state.shippingCosts = []	
			}
			
			$scope.pickUps = [
				{value: 'noPickUp', display: "No pick-up"},
				{value: 'canPickUp', display: "Buyer can pick-up"},
				{value: 'mustPickup', display: "Buyer must pick-up"}
			]
			
			//hide shipping options if chose "must pick-up" in last version
			if($scope.cache.state.pickUp === 'mustPickup'){
				$scope.shippingDisabled = true;
			}	
		}

		$scope.hasSpecificShipping = function(){
			return $scope.cache.state.shippingType === "specific";
		}

		$scope.isNotOnlyPick = function(){
			return $scope.cache.state.pickUp !== 'mustPickup';
		}

		$scope.processPickUp = function(){
			if($scope.cache.state.pickUp === 'noPickUp'){
				$scope.shippingDisabled = false;
				removeShippingOptions(pickUpOption)
			}				
			else if($scope.cache.state.pickUp === 'canPickUp'){
				$scope.shippingDisabled = false;										
				addShippingOptions(pickUpOption)
			}
			else if($scope.cache.state.pickUp === 'mustPickup'){
				$scope.shippingDisabled = true;
				//reset product shipping options and add only pickup option
				resetShippingOptions();
				addShippingOptions(pickUpOption)
			}
		}
		
		$scope.processFreeShipping = function(){
			addShippingOptions(freeShippingOption);
		}

		$scope.processSpecificCost = function(){
			if($scope.cache.state.shippingCosts.length === 0){
				$scope.cache.state.shippingCosts.push({});
			}
			removeShippingOptions(freeShippingOption);		
		}

		$scope.addCostOption = function(){
			$scope.cache.state.shippingCosts.push({});
		}

		$scope.removeCostOption = function(shippingCost){
			var index = $scope.cache.state.shippingCosts.indexOf(shippingCost);
			$scope.cache.state.shippingCosts.splice(index, 1);
		}

		var removeShippingOptions = function(option){
			var index = $scope.cache.product.shippingCosts.indexOf(option);
			if(index !== -1){
				$scope.cache.product.shippingCosts.splice(index,1);
			}
		}

		var addShippingOptions = function(option){			
			var index = $scope.cache.product.shippingCosts.indexOf(option);
			if(index === -1){
				$scope.cache.product.shippingCosts.push(option);
			}
		}

		var resetShippingOptions = function(option){
			$scope.cache.product.shippingCosts = [];
		}

		// when click "save" or "next", add the "cache.shippingCosts" into product
		$scope.storeShippingCosts = function(){
			$log.debug("storeShippingCosts");
			if($scope.cache.state.shippingType === "specific"){
				//filter for the distinct costs options
				$scope.cache.state.shippingCosts.filter(function(shippingCost){
					return $scope.cache.product.shippingCosts.indexOf(shippingCost) === -1;
				}).forEach(function(distinctCost){
					$scope.cache.product.shippingCosts.push(distinctCost);
				})
			}			
			$log.debug("storeShippingCosts",$scope.cache.product.shippingCosts);
		}

		// check if the next button should be enabled
		$scope.$watch("shippingInfo.$valid",function(validity){
			$log.debug($scope.shippingInfo.$valid);
			if($scope.shippingInfo.$valid){
	    		$scope.stepCompleted(STEP_NO);
	    		$scope.isNextDisabled = false;
	    	}else{
	    		$scope.updoStepCompleted(STEP_NO);	    	
	    		$scope.isNextDisabled = true;
	    	}	
		}) 
	  
		init();
	}

])