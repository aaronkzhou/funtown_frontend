'use strict';
angular.module('selling').controller('AddProductStep2', ['$log','$scope','$http','CatalogFactory','AttributeService','AlertsService',
	function($log,$scope,$http,CatalogFactory,AttributeService,AlertsService) {
		$log.debug('AddProductStep2::controller',$scope.cache.product);
		
		var STEP_NO = 2;
		var MAX_PHOTO_COUNT = 3;
		var rootCategory,catalogProcessor;
		var attribute,catalogAttribute;
		var MAX_DISCS_COUNT = 10;
		var file_extension;

		function init(){			
			rootCategory = $scope.cache.state.rootCategory;
			$log.debug('AddProductStep2::init - ',rootCategory);
			$scope.discs=getDiscAttribute(MAX_DISCS_COUNT);
			//Get the correct catalog processor
			catalogProcessor = new CatalogFactory(rootCategory);
			$scope.image = {};
			$scope.image.errors = "";
			if($scope.cache.product.category){
				$scope.genres = AttributeService.getAttributesFor('genre',$scope.cache.product.category.categoryId);
				$scope.regions = AttributeService.getAttributesFor('region',$scope.cache.product.category.categoryId);
				$scope.conditions = AttributeService.getAttributesFor('condition',$scope.cache.product.category.categoryId);
				$scope.classifications = AttributeService.getAttributesFor('NZClassification',$scope.cache.product.category.categoryId);
				$scope.discs=getDiscAttribute(10);
			}else{
				$log.warn("Category not yet set.");
			}	

			if($scope.cache.product.catalog && $scope.pid){
				getPosterFromLocal(); 
			}else{
				getPoster();
			}
			if(!$scope.cache.product.productPhotos||$scope.cache.product.productPhotos.length === 0){
				$scope.cache.product.productPhotos = [{},{},{}];
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
			$log.debug("getPoster from remote");
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
		function getPosterFromLocal(){
			$log.debug("getPoster from local");
			$scope.poster = '';
			if($scope.cache.product.catalog && $scope.cache.product.catalog.catalogAttributes){
				$scope.cache.product.catalog.catalogAttributes.forEach(function(catalogAttribute){					
					if(catalogAttribute.attributeType === 'poster'){
						$scope.poster = "imageRepo/" + catalogAttribute.attributeValue;
					}
				})
			}	
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
				for(attribute in $scope.cache.state.manualcatalog){
					catalogAttribute = {"attributeType": attribute, "attributeValue": $scope.cache.state.manualcatalog[attribute]};
					$scope.cache.product.catalog.catalogAttributes.push(catalogAttribute);
				}
			}
			
		}		

		//event hadler for photo add
		$scope.photoAdded = function(file,event,flow) {
			$log.debug("photoAdded",file);

			console.log(imageValidate(file));
			console.log($scope.image.errors);
			if(imageValidate(file)){
				var photos = $scope.cache.product.productPhotos;
				console.log($scope.cache.product.productPhotos);
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
			}else{
				AlertsService.notify($scope.image.errors,"error");
				$scope.image.errors = "";
			}
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
		//get the array of discs
		function getDiscAttribute(max){
	    	var d =0;
	    	var discs=[];
			while ( d < max) {
		      discs[d] = d+1;
		      d++;
		    }
		    discs[d] = max + "+";
		    return discs
	    }
	    //upload image validation
	    function imageValidate(file){
	    	file_extension = file.getExtension();
			if (file.size > 1024*1024) {
			    $scope.image.errors = "File cannot bigger than 1MB";
			    return false;
			}
			if (checkImageType()){
				$scope.image.errors = "File can only be png,jpg,jpeg image file.";
				return false;
			}
			return true;
		}
		//check image type to be png,jpg,jpeg
		function checkImageType(file_extension){
			return file_extension == 'png' || file_extension == 'jpg' || file_extension == 'jpeg';
		}

		init();
	 }
])