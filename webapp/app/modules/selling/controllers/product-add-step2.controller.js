'use strict';
angular.module('selling').controller('AddProductStep2', ['$log','$scope','$http','CatalogFactory',
	function($log,$scope,$http,CatalogFactory) {
		$log.debug('AddProductStep2::controller',$scope.product);
		
		var STEP_NO = 2;
		var rootCategory,catalogProcessor;

		function init(){			
			rootCategory = $scope.stepsCache.rootCategory
			$log.debug('AddProductStep2::init - ',rootCategory);
			//Get the correct catalog processor
			catalogProcessor = new CatalogFactory(rootCategory);	

			if($scope.product.catalog){
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
			$log.debug("AddProductStep2::showCatalogDetail ",$scope.stepsCache.selectedCatalog);
			catalogProcessor.getCatalogDetails($scope.stepsCache.selectedCatalog)
				.then(function(catalog){		
					$log.debug("AddProductStep2::showCatalogDetail - catalog " ,catalog);			
					$scope.product.catalog = catalog;
					getPoster();					
				})
		}

		function getPoster(){
			$log.debug("getPoster");
			$scope.poster = '';
			if($scope.product.catalog && $scope.product.catalog.catalogAttributes){
				$scope.product.catalog.catalogAttributes.forEach(function(catalogAttribute){					
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
			$scope.product.catalog = null;
			$scope.stepsCache.selectedCatalog = {};
		}

		// check if the database catalog details should be shown
		$scope.showAutoDetails = function(){
			return $scope.stepsCache.catalogType === 'auto' && $scope.product.catalog;	
		}

		// check if the manual details form should be shown
		$scope.showManualDetails = function(){
			return $scope.stepsCache.catalogType === 'manual';	
		}

		// check if the next button should be enabled
		$scope.isNextDisabled = function(){
			if($scope.product.catalog && $scope.product.catalog.title.length > 0){
				$scope.stepCompleted(STEP_NO);
				return false;
			}else{
				$scope.updoStepCompleted(STEP_NO);
				return true;	
			}			
		}

		//check if the catalogue has been chosen
		$scope.hasCatalogue = function(){
			return $scope.product.catalog; 
		}

		init();
	 }
])