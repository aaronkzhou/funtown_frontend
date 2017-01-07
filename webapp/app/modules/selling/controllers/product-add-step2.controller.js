'use strict';
angular.module('selling').controller('AddProductStep2', ['$log','$scope','$http','CatalogFactory','AttributeService','AlertsService',
	function($log,$scope,$http,CatalogFactory,AttributeService,AlertsService) {
		$log.debug('AddProductStep2::controller',$scope.cache.product);
		
		var STEP_NO = 2;
		var MAX_PHOTO_COUNT = 3;
		var rootCategory,catalogProcessor;

		function init(){						
			rootCategory = $scope.cache.state.rootCategory;
			
			$log.debug('AddProductStep2::init - ',rootCategory);
			//Get the correct catalog processor
			catalogProcessor = new CatalogFactory(rootCategory);

			if($scope.cache.product.category){
				$scope.genres = AttributeService.getAttributesFor('genre',$scope.cache.product.category.categoryId);
			}else{
				$log.warn("Category not yet set.");
			}	

			if($scope.cache.product.catalog){
				getPoster(); 
			}
			if(!$scope.cache.product.productPhotos){
				$scope.cache.product.productPhotos =[{},{},{}];
				$scope.photoCount = 0;				
			}else{
				$scope.photoCount = getPhotoCount();
			}
			$scope.maxPhotos = MAX_PHOTO_COUNT;
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

		//check if the catalogue has been chosen
		$scope.hasCatalogue = function(){
			return $scope.cache.product.catalog; 
		}

		//check if the attribute should be shown on the screen
		$scope.isDisplayable = function(attribute){
			return attribute.attributeType != 'poster';
		}

		// clear the selected catalog as another option is choosen
		$scope.catalogTypeChange = function(){
			$scope.cache.product.catalog = null;
			$scope.cache.state.selectedCatalog = null;
			//initialize the manual catalog attributes storage
			$scope.cache.state.manualcatalog = {};
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
			if($scope.cache.state.catalogType === 'auto' && $scope.cache.product.catalog && $scope.cache.product.catalog!==null){
				$scope.stepCompleted(STEP_NO);
				return false;
			}else if($scope.cache.state.catalogType === 'manual' && $scope.configProduct && $scope.configProduct.$valid){
				$scope.stepCompleted(STEP_NO);
				storeManualCatalog();
				return false;
			}else{
				$scope.updoStepCompleted(STEP_NO);
				return true;	
			}			
		}

		//store the manualcatalog into product
		function storeManualCatalog(){
			$log.debug("storeManualCatalog");
			if($scope.cache.state.catalogType === 'manual'){
				if($scope.cache.product.catalog){
					$scope.cache.product.catalog.catalogAttributes = [];					
				}
				for(var attribute in $scope.cache.state.manualcatalog){
					var catalogAttribute = {"attributeType": attribute, "attributeValue": $scope.cache.state.manualcatalog[attribute]};
					$scope.cache.product.catalog.catalogAttributes.push(catalogAttribute);
				}
			}
			
		}		

		//event hadler for photo add
		$scope.photoAdded = function(file,event,flow) {
			$log.debug("photoAdded",file);

			var photos = $scope.cache.product.productPhotos;
			//store the flow so that it can be used to call upload when product is saved.
			if(!$scope.cache.state.photosFlow){
				$scope.cache.state.photosFlow = flow;
			}
			//add uploaded files to photos for quick display
			photos.some(function(photo){
				if(!photo.file){
					photo.file = file;
					$scope.photoCount++;
					return true;
				}				
				return false;
			})
			$log.debug("photo count: ",$scope.photoCount);
		  	event.preventDefault();//prevent file from uploading
		}	

		$scope.photoRemove = function(id){
			$log.debug("photoRemove",id);
			$log.debug("photoRemove",$scope.cache.state.photosFlow);
			var photos = $scope.cache.product.productPhotos;
			var flowFiles = $scope.cache.state.photosFlow;
			delete photos[id].file;
			delete flowFiles.files.splice(id,1);
			$scope.photoCount--;
		}

		//get the count of photos product has
		function getPhotoCount(){
			 return $scope.cache.product.productPhotos.filter(function(photo){
			 	 return photo.file;
			 }).length
		}

		init();
	 }
])