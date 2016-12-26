angular.module('selling').controller('AddProductStep6', ['$log','$scope', '$http', 'AttributeService', 
	function($log,$scope,$http,AttributeService){
		$log.debug('AddProductStep6 controller', $scope.cache.product);

		var STEP_NO = 6;
		$scope.cache.state.attributesList = [];

		function init(){
			$http.get('/rest/api/attributes').then(function(response){
				$scope.cache.state.attributesList = response.data;
				getPoster();
				$scope.getProductAttributesById();
				$scope.cache.state.shippingRate = $scope.getProductAttributesByValue($scope.cache.product.shippingRate);
				$scope.cache.state.pickUpDisplay = $scope.getPickUpDisplay($scope.cache.state.pickUp);
			});
			
		}

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

		$scope.getProductAttributesByValue = function(attributeValue){
			$log.debug("getProductAttributesByValue - ",attributeValue);
			if(attributeValue){
				var specificAttribute = $scope.cache.state.attributesList.filter(function(attribute){
					return attribute.value === attributeValue;
				})				
			}
			return specificAttribute[0].display;
		}

		$scope.getPickUpDisplay = function(pickUpValue){
			var pickUp = $scope.pickUps.filter(function(pickUp){
				return pickUp.value === pickUpValue;
			})
			return pickUp[0].display;
		}

		$scope.getProductAttributesById = function(){
			$scope.cache.state.productAttributes.push($scope.getProductAttributesFor('regions', $scope.cache.product.productAttributes.region));
			$scope.cache.state.productAttributes.push($scope.getProductAttributesFor('conditions', $scope.cache.product.productAttributes.condition));
			$scope.cache.state.productAttributes.push($scope.getProductAttributesFor('classifications', $scope.cache.product.productAttributes.classification));
		}

		//get attributes detail for the confirm step
		$scope.getProductAttributesFor = function(name, attributeValue){
			$log.debug("getProductAttributesFor - ",name,attributeValue);
			if(attributeValue){
				var specificAttribute = $scope.cache.state.attributesList.filter(function(attribute){
					return attribute.attributeId === attributeValue;
				})				
			}
			return specificAttribute[0];
		}

		init();		
	}
])