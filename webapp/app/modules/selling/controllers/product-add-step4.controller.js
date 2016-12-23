'use strict';
angular.module('selling').controller('AddProductStep4', ['$log','$scope','AttributeService',
	function($log,$scope,AttributeService){
		$log.debug('AddProductStep4 controller');
		var STEP_NO = 4;

		function init(){
			$log.debug("AddProductStep4::init");
			
			if($scope.product.category){
				$scope.paymentMethods = AttributeService.getAttributesFor('paymentMethods',$scope.product.category.categoryId);
				$scope.offerDurations = AttributeService.getAttributesFor('offerDurations',$scope.product.category.categoryId);
			}else{
				$log.warn("Category not yet set.");
			}	
		}
		
		$scope.showProduct = function(){
			$log.debug($scope.product)
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
		

		init();
	}
])