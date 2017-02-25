'use strict';
angular.module('funtown').service('FuntownCatalogService', ['$log','$http',
	function($log,$http){		
		//search the title in funtown Db.
		this.getCatalog = function(search,rootCategory) {
			$log.debug("FuntownCatalogService::getCatalogue - ",search,rootCategory);		
			return $http.get('/rest/api/catalogues/search/' + rootCategory + '?title=' + search);				
		}

		//get movie details from funtown db
		this.getCatalogDetails = function(catalogId,rootCategory) {
			$log.debug("FuntownCatalogService::getCatalogDetails - ",catalogId);			
			return $http.get('/rest/api/catalogues/'+ catalogId).then(function(response){
				return response.data;
			});
		}
	}
])