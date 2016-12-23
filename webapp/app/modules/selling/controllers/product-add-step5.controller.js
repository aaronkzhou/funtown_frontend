'use strict';
angular.module('selling').controller('AddProductStep5', ['$log','$scope','AttributeService',
	function($log,$scope,AttributeService){
		$log.debug('AddProductStep5 controller');

		var STEP_NO = 5;		
		// disable the inputs for adding shipping cost
		$scope.specifyDisabled = true;
		$scope.pickUps = [
			{value: 0, display: "No pick-up"},
			{value: 1, display: "Buyer can pick-up"},
			{value: 2, display: "Buyer must pick-up"}
		]

		function init(){
			$log.debug("AddProductStep5::init");
			
			if($scope.cache.product.category){
				$scope.shippingRates = AttributeService.getAttributesFor('shippingRate',$scope.cache.product.category.categoryId);
				$log.debug($scope.shippingRates);
			}else{
				$log.warn("Category not yet set.");
			}	
		}
		// check if allow pick up only
		$scope.pickUp = function(){
			if($scope.cache.product.allowPickUp === 2){
				// disable other shipping options
				$scope.mustPickUp = true;
				$scope.cache.product.shippingCosts = [{
					cost: 0,
					description: "onlyPickUp"
				}];
			}else {
				$scope.cache.product.shippingCosts = $scope.cache.product.shippingCosts.filter(function(cost){
					return cost.description !== "onlyPickUp";
				})
				$scope.mustPickUp = false;
			}
			return $scope.mustPickUp ;			
		}

		$scope.freeShipping = function(){
			$scope.cache.product.shippingCosts = [{
					cost: 0,
					description: "freeShipping"
				}];
			$scope.specifyDisabled = true;
		}

		$scope.specifyCost = function(){
			$scope.specifyDisabled = false;
			$scope.cache.product.shippingCosts = [{}];
		}

		$scope.addShippingCost = function(){
			$scope.cache.product.shippingCosts.push({});
		}

		$scope.removeShippingCost = function(shippingCost){
			var index = $scope.cache.product.shippingCosts.indexOf(shippingCost);
			$scope.cache.product.shippingCosts.splice(index, 1);
		}
	    $log.debug('product', $scope.cache.product)
		init();
	}

])