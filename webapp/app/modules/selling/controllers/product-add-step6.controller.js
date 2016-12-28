angular.module('selling').controller('AddProductStep6', ['$log','$scope','AttributeService', 
	function($log,$scope,AttributeService){
		$log.debug('AddProductStep6 controller', 'product',$scope.cache.product);
		$log.debug('cache', $scope.cache.state);
		var STEP_NO = 6;		
		var attributes = AttributeService.getAttributes();

		function init(){
				getPoster();
				$scope.getProductAttributesById();
				$scope.cache.state.shippingRate = $scope.getProductAttributesById("shippingRates",$scope.cache.product.shippingRateId);
				$scope.cache.state.region = $scope.getProductAttributesById("region",$scope.cache.product.productAttributes.region);
				$scope.cache.state.condition = $scope.getProductAttributesById("condition",$scope.cache.product.productAttributes.condition);
				$scope.cache.state.NZClassification = $scope.getProductAttributesById("NZClassification",$scope.cache.product.productAttributes.classification);
				$scope.cache.state.offerDuration = $scope.getProductAttributesById("offerDurations",$scope.cache.product.productPriceDetails.offerDuration);							
				$scope.cache.state.pickUpDisplay = $scope.getPickUpDisplay($scope.cache.state.pickUp);
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

		$scope.getPickUpDisplay = function(pickUpValue){
			$log.debug($scope.pickUps);
			return $scope.pickUps.find(function(pickUp){
				return pickUp.value === pickUpValue;
			}).display;
		}

		$scope.getProductAttributesById = function(attributeName, attributeId){		
			if(attributeId){
				return attributes[attributeName].find(function(attribute){
					return attribute.attributeId === attributeId;
				}).display;
			}
		}

		init();		
	}
])