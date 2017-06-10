'use strict';
angular.module('buying').controller('searchResultController', ['$log','$scope', 'AttributeService','ProductService','AuthService','$state','AlertsService','$http',
	function($log,$scope,AttributeService,ProductService,AuthService,$state,AlertsService,$http){
		$log.debug("searchResultController");
		var productDetails = [];
		var productInfo = [];
		var searchResultList = [];

		function init(){
			$scope.searchResult = {};
			$scope.searchResult.resultCount = false;
			$scope.searchResult.title = "";
			//$scope.searchResult.resultList = [];
      $scope.searchResult.categoryName = "";
      $scope.searchResult.buyNowPrice = "";
      $scope.searchResult.starring = "";
      $scope.searchResult.director = "";
			$scope.$on('to-child', function(event,arg) {
					arg.then(function(response){

						$scope.searchResult.resultList = [];
						console.log(response);
						$scope.searchResult.resultCount = true;
						for (var i = 0; i < response.length; i++){
							searchResultList.push(response[i].then(function(response){
								console.log(response);
								response["runtime"] = ProductService.findAttributeType("runtime", response.data.catalog.catalogAttributes);
								response["starring"] = ProductService.findAttributeType("starring", response.data.catalog.catalogAttributes);
								response["director"] = ProductService.findAttributeType("director", response.data.catalog.catalogAttributes);
								response["poster"] = getPoster(ProductService.findAttributeType("poster", response.data.catalog.catalogAttributes));
								response["year"] = ProductService.findAttributeType("year", response.data.catalog.catalogAttributes);
								$scope.searchResult.resultList.push(response);
							}));
						}

					})
			});
			function getPoster(posterURL){
				return "http://image.tmdb.org/t/p/w185" + posterURL;
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
