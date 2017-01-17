'use strict';
angular.module('selling').controller('AddProductStep4', ['$log','$scope','AttributeService',
	function($log,$scope,AttributeService){
		$log.debug('AddProductStep4 controller');
		var STEP_NO = 4;

		function init(){
			$log.debug("AddProductStep4::init");
			var selectedPayment;
			if($scope.cache.product.category){
				if($scope.cache.product.paymentMethods){
					selectedPayment = $scope.cache.product.paymentMethods;	
				}
				$scope.cache.product.paymentMethods = AttributeService.getAttributesFor('paymentMethods',$scope.cache.product.category.categoryId);
					$scope.cache.product.paymentMethods.map(function(paymentMethod){
						return paymentMethod.selected = false;
					});
				if(selectedPayment){
					$scope.cache.product.paymentMethods.forEach(function(item){
						selectedPayment.forEach(function(selectedItem){
							if(selectedItem.attributeId == item.attributeId){
								item.selected = true;
							}
						})	
					});
				}
				$scope.offerDurations = AttributeService.getAttributesFor('offerDurations',$scope.cache.product.category.categoryId);
			}else{
				$log.warn("Category not yet set.");
			}
		}
		

		// check if the next button should be enabled
		$scope.$watch("priceInfo.$valid",function(validity){
			if($scope.priceInfo.$valid){
	    		$scope.stepCompleted(STEP_NO);
	    		$scope.isNextDisabled = false;
	    	}else{
	    		$scope.updoStepCompleted(STEP_NO);	    	
	    		$scope.isNextDisabled = true;
	    	}	
		}) 

		//check if atleast on payment method is selected
		$scope.atleastOneChecked = function(){
			return !$scope.cache.product.paymentMethods.some(function(paymentMethod){
				return paymentMethod.selected;
			})				
		}

		//check if offer price is entered
		$scope.isOfferPresent = function(){
			var val = $scope.cache.product.productPriceDetails && $scope.cache.product.productPriceDetails.offerPrice;
			return val || val === 0;			
		}
		

		init();
	}
])