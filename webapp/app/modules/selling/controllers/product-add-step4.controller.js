'use strict';
angular.module('selling').controller('AddProductStep4', ['$log','$scope','AttributeService',
	function($log,$scope,AttributeService){
		$log.debug('AddProductStep4 controller');

		function init(){
			$log.debug("AddProductStep4::init");
			$scope.isBuynowOnly = true;
			$scope.pricingOption = {
				"buyNowOnly":true,
				"bid":false
			};
			if($scope.product.category){
				$scope.paymentMethods = AttributeService.getAttributesFor('paymentMethods',$scope.product.category.categoryId);
			}else{
				$log.warn("Category not yet set.");
			}	
		}
		$scope.addpaymentMethod = function(){
			$log.debug("add")
			$log.debug($scope.paymentMethod)
		}
		
		init();
	}
])