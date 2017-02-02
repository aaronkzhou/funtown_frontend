'use strict';
angular.module('selling').controller('AddProductStep4', ['$log','$scope','AttributeService',
	function($log,$scope,AttributeService){
		$log.debug('AddProductStep4 controller');
		var STEP_NO = 4;
		var selectedPayment;
		function init(){
			$log.debug("AddProductStep4::init");
			if($scope.cache.product.category){
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

		//check if offer price is entered
		$scope.isOfferPresent = function(){
			var val = $scope.cache.product.productPriceDetails && $scope.cache.product.productPriceDetails.offerPrice;
			return val || val === 0;			
		}
		

		init();
	}
])