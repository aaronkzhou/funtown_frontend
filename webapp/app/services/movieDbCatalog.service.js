'use strict';
angular.module('funtown').service('MovieDbCatalogService', ['$log','$http', '$q','$filter',
	function($log,$http,$q,$filter){		
		//search the title in themoviedb.org
		this.getCatalog = function(search) {
			$log.debug("movieDbCatalogService::getCatalogue - ",search);			
			return $http.get('http://api.themoviedb.org/3/search/movie?api_key=2f789345b59491d1513056e609ee3c84&query=' + search )			
		}

		//get movie details from themoviedb.org
		this.getCatalogDetails = function(catalogId) {
			$log.debug("movieDbCatalogService::getCatalogDetails - ",catalogId);			
			var deferred = $q.defer();
			$http.get('http://api.themoviedb.org/3/movie/'+ catalogId + ' +?api_key=2f789345b59491d1513056e609ee3c84')
			.then(function(response){				
				var catalog = processResult(response);
				$log.debug("Resolving")
				deferred.resolve(catalog);	
			})
			return deferred.promise;
		}

		var movieDbMapping = {
			title:{tag:'title',isAttribute:false},
			movieDbId:{tag:'id',isAttribute:false},
			year:{tag:'release_date',isAttribute:true,preProcessor:formatYear},
			plot:{tag:'overview',isAttribute:true},
			genres:{tag:'genres',isAttribute:true},			
			poster:{tag:'poster_path',isAttribute:true},
			runtime:{tag:'runtime',isAttribute:true},			
			budget:{tag:'budget',isAttribute:true},
			revenue:{tag:'revenue',isAttribute:true},
			imdbId:{tag:'imdb_id',isAttribute:true},
		}

		function processResult(response){
			$log.debug("MovieDbCatalogService::processResult ",response);
			var result = response.data;
			var catalog = {};
			catalog.catalogAttributes = [];

			for (var property in movieDbMapping){
				var mapping = movieDbMapping[property];
				var preProcessor = mapping.preProcessor;
				if(mapping.isAttribute){
					catalog.catalogAttributes.push({
						attributeType:property,
						attributeValue: (preProcessor ? preProcessor(result[mapping.tag]) : result[mapping.tag])
					});
				}else{
					catalog[property] = result[mapping.tag];	
				}				
			}
			$log.debug("process complete")
			return catalog;
		}	

		function formatYear(value){
			return $filter('date')(value.replace('-',''),'yyyy');			
		}

	}
])