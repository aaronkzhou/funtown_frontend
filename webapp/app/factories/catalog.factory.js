'use strict';
angular.module('funtown').factory('CatalogFactory', [ 'FuntownCatalogService','MovieDbCatalogService','$log','$q',
	function(FuntownCatalogService,MovieDbCatalogService,$log,$q){	
		var CatalogFactory = function(rootCategory){
			$log.debug("CatalogFactory - ",rootCategory);
			if(!rootCategory){
				$log.warn("Cannot get catalog processor as rootCategory is not yet set.")
				return null;
			}
			if(rootCategory.toLowerCase() === 'movies'){
				return new MoviesCatalog(MovieDbCatalogService,FuntownCatalogService,$log,$q);
			}else{
				return new GamesCatalog(FuntownCatalogService,$log,$q);				
			}	
		}

		return CatalogFactory;
	}
])