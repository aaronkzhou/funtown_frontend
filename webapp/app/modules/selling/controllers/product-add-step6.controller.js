'use strict';
angular.module('selling').controller('AddProductStep6', ['$log','$scope','AttributeService',
	function($log,$scope,AttributeService){
		$log.debug('AddProductStep6 controller', 'product',$scope.cache.product);
		$log.debug('cache', $scope.cache.state);
		var STEP_NO = 6;				
		var attributes =[];

		function init(){		
			attributes = AttributeService.getAttributes();		
						
			$scope.region = $scope.cache.product.productAttributes && getProductAttributesById("region",$scope.cache.product.productAttributes.region);
			$scope.condition = $scope.cache.product.productAttributes && getProductAttributesById("condition",$scope.cache.product.productAttributes.condition);
			$scope.NZClassification = $scope.cache.product.productAttributes && getProductAttributesById("NZClassification",$scope.cache.product.productAttributes.classification);
			$scope.offerDuration = $scope.cache.product.productPriceDetails && getProductAttributesById("offerDurations",$scope.cache.product.productPriceDetails.offerDuration);							
			$scope.shippingRate = getProductAttributesById("shippingRates",$scope.cache.product.shippingRateId);
			$scope.pickUp = getPickUpDisplay($scope.cache.state.pickUp);
			$scope.cache.product.status="ACTIVE";
			
			getPoster();
		};

		function getPoster(){
			$log.debug("getPoster");
			$scope.poster = '';
			if($scope.cache.product.catalog && $scope.cache.product.catalog.catalogAttributes){
				$scope.cache.product.catalog.catalogAttributes.forEach(function(catalogAttribute){					
					if(catalogAttribute.attributeType === 'poster'){
						$scope.poster = "http://image.tmdb.org/t/p/w185/" + catalogAttribute.attributeValue;
					}
				})
			}	
			$log.debug($scope.poster);		
		}

		//check if the attribute should be shown on the screen
		$scope.isDisplayable = function(attribute){
			return attribute.attributeType != 'poster';
		}

		$scope.getStock = function(){		
			return $scope.cache.product.unlimited  ? 'Unlimited' :  $scope.cache.product.stock; 
		}

		$scope.getProductCode = function(){
			return ($scope.cache.product.productCode && $scope.cache.product.productCode.length() >0) ? $scope.cache.product.productCode : '<span class="suppress">Auto-generated</span>';
		}

		$scope.specificCost = function(){
			return function(shippingCost){				
				return shippingCost.description !=='freeShipping' && shippingCost.description !=='pickUp'
			}
		}	


		function getPickUpDisplay(pickUpId){
			if(pickUpId){				
				return $scope.pickUps.find(function(pickUp){
					return pickUp.value === pickUpId;
				}).display;
			}
		}

		function getProductAttributesById(attributeName, attributeId){		
			$log.debug("attributeId",attributeId);
			if(attributeId){
				$log.debug("attributeId",attributeId);
				return attributes[attributeName].find(function(attribute){
					return attribute.attributeId === attributeId;
				}).display;
			}
		}



		init();		
	}
])