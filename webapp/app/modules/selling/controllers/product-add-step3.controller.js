'use strict';
angular.module('selling').controller('AddProductStep3', ['$log','$scope','AttributeService',
	function($log,$scope,AttributeService){
		var STEP_NO = 3;
		var MAX_DISCS_COUNT = 10;

		$log.debug('AddProductStep3 controller');

		function init(){		
			$log.debug("AddProductStep3::init");		
			$scope.discs=getDiscAttribute(MAX_DISCS_COUNT);

			if($scope.cache.product.category){
				$scope.regions = AttributeService.getAttributesFor('region',$scope.cache.product.category.categoryId);
				$scope.conditions = AttributeService.getAttributesFor('condition',$scope.cache.product.category.categoryId);
				$scope.classifications = AttributeService.getAttributesFor('NZClassification',$scope.cache.product.category.categoryId);
				$scope.discs=getDiscAttribute(10);
			}else{
				$log.warn("Category not yet set.");
			}			
			console.log("AddProductStep3:product ",$scope.cache.product);
		}

		// check if the catalog is created manual or using existing catalog (auto)
		$scope.isAutoMode = function(){
			return $scope.cache.state.catalogType === 'auto' 
		}

		// check if the next button should be enabled
		$scope.$watch("productInfo.$valid",function(validity){
			if($scope.productInfo.$valid){
	    		$scope.stepCompleted(STEP_NO);
	    		$scope.isNextDisabled = false;
	    	}else{
	    		$scope.updoStepCompleted(STEP_NO);	    	
	    		$scope.isNextDisabled = true;
	    	}	
		}) 
		
	  
	    // create discs array 
	    function getDiscAttribute(max){
	    	var d =0;
	    	var discs=[];
			while ( d < max) {
		      discs[d] = d+1;
		      d++;
		    }
		    discs[d] = max + "+";
		    return discs
	    }

	    init();
	}
])