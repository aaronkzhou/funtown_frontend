'use strict';
angular.module('selling').controller('AddProductStep2', ['$log','$scope','$http','CatalogFactory',
	function($log,$scope,$http,CatalogFactory) {
		$log.debug('AddProductStep2::controller',$scope.product);
		
		var STEP_NO = 2;
		var rootCategory,catalogProcessor;

		function init(){			
			rootCategory = $scope.product.rootCategory
			$scope.selectedCatalog = {};	
			
			//Get the correct catalog processor
			catalogProcessor = new CatalogFactory(rootCategory);	

			if($scope.product.catalog){
				getPoster(); 
			}
		}

		// search title
		$scope.searchCatalogue = function(search) {		
			return catalogProcessor.searchCatalogue(search,rootCategory)				
		}

		
		// get catalog details for the selected catalog Id
		$scope.showCatalogDetail = function(){
			$log.debug("AddProductStep2::showCatalogDetail ",$scope.selectedCatalog);
			catalogProcessor.getCatalogDetails($scope.selectedCatalog)
				.then(function(catalog){		
					$log.debug("AddProductStep2::showCatalogDetail - catalog " ,catalog);			
					$scope.product.catalog = catalog;
					getPoster();
					$scope.stepCompleted(STEP_NO);
				})
		}

		function getPoster(){
			$log.debug("getPoster");
			if($scope.product.catalog && $scope.product.catalog.catalogAttributes){
				$scope.product.catalog.catalogAttributes.forEach(function(catalogAttribute){					
					if(catalogAttribute.attributeType === 'poster'){
						$scope.poster = "http://image.tmdb.org/t/p/w185/" + catalogAttribute.attributeValue;
					}
				})
			}			
		}

		//show the row only if it is not a poster
		$scope.isNotPoster = function(attribute){
			return attribute.attributeType != 'poster';
		}

		// clear the selected catalog as another option is choosen
		$scope.catalogTypeChange = function(){
			$scope.product.catalog = null;
			$scope.selectedCatalog = {};
		}

		// check if the database catalog details should be shown
		$scope.showAutoDetails = function(){
			return $scope.product.catalogType === 'auto' && $scope.product.catalog;	
		}

		// check if the manual details form should be shown
		$scope.showManualDetails = function(){
			return $scope.product.catalogType === 'manual';	
		}

		// check if the next button should be enabled
		$scope.isNextDisabled = function(){
			return !($scope.product.catalog);
		}

		//check if the catalogue has been chosen
		$scope.hasCatalogue = function(){
			return $scope.product.catalog; 
		}

		init();
	 }
])