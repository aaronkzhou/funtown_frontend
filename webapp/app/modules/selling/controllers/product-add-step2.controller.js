'use strict';
angular.module('selling').controller('AddProductStep2', ['$log','$scope','$http','CatalogFactory',
	function($log,$scope,$http,CatalogFactory) {
		$log.debug('AddProductStep2::controller',$scope.cache.product);
		
		var STEP_NO = 2;
		var rootCategory,catalogProcessor;

		function init(){			
			rootCategory = $scope.cache.state.rootCategory
			$log.debug('AddProductStep2::init - ',rootCategory);
			//Get the correct catalog processor
			catalogProcessor = new CatalogFactory(rootCategory);	

			if($scope.cache.product.catalog){
				getPoster(); 
			}
		}

		// search title
		$scope.searchCatalogue = function(search) {		
			if(search.length > 0){
				return catalogProcessor.searchCatalogue(search,rootCategory);	
			}	
		}

		
		// get catalog details for the selected catalog Id
		$scope.showCatalogDetail = function(){
			$log.debug("AddProductStep2::showCatalogDetail ",$scope.cache.state.selectedCatalog);
			catalogProcessor.getCatalogDetails($scope.cache.state.selectedCatalog)
				.then(function(catalog){		
					$log.debug("AddProductStep2::showCatalogDetail - catalog " ,catalog);			
					$scope.cache.product.catalog = catalog;
					getPoster();					
				})
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

		// clear the selected catalog as another option is choosen
		$scope.catalogTypeChange = function(){
			$scope.cache.product.catalog = null;
			$scope.cache.state.selectedCatalog = {};
		}

		// check if the database catalog details should be shown
		$scope.showAutoDetails = function(){
			return $scope.cache.state.catalogType === 'auto' && $scope.cache.product.catalog;	
		}

		// check if the manual details form should be shown
		$scope.showManualDetails = function(){
			return $scope.cache.state.catalogType === 'manual';	
		}

		// check if the next button should be enabled
		$scope.isNextDisabled = function(){
			if($scope.cache.product.catalog && $scope.cache.product.catalog.title.length > 0){
				$scope.stepCompleted(STEP_NO);
				return false;
			}else{
				$scope.updoStepCompleted(STEP_NO);
				return true;	
			}			
		}

		//check if the catalogue has been chosen
		$scope.hasCatalogue = function(){
			return $scope.cache.product.catalog; 
		}

		init();
	 }
])