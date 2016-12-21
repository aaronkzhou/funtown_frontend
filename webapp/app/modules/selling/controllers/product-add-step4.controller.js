'use strict';
angular.module('selling').controller('AddProductStep4', ['$log','$scope','AttributeService',
	function($log,$scope,AttributeService){
		$log.debug('AddProductStep4 controller');

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

		init();
	}
])