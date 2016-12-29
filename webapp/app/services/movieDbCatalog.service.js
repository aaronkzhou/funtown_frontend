'use strict';
angular.module('funtown').service('MovieDbCatalogService', ['$log','$http', '$q','$filter',
	function($log,$http,$q,$filter){		
		var MAX_CAST_COUNT = 3;
		var DIRECTOR_DEPARTMENT = 'Directing';
		var DIRECTOR_JOB = 'Director'

		//search the title in themoviedb.org
		this.getCatalog = function(search) {
			$log.debug("movieDbCatalogService::getCatalogue - ",search);			
			return $http.get('http://api.themoviedb.org/3/search/movie?api_key=2f789345b59491d1513056e609ee3c84&query=' + search )			
		}

		//get movie details from themoviedb.org
		this.getCatalogDetails = function(catalogId) {
			$log.debug("movieDbCatalogService::getCatalogDetails - ",catalogId);			
			var deferred = $q.defer();
			$http.get('http://api.themoviedb.org/3/movie/'+ catalogId + ' +?append_to_response=credits&api_key=2f789345b59491d1513056e609ee3c84')
			.then(function(response){				
				var catalog = processResult(response);
				deferred.resolve(catalog);	
			},function(error){
				deferred.reject(error);	
			})
			return deferred.promise;
		}

		var movieDbMapping = {
			title:{tag:'title',isAttribute:false},
			refId:{tag:'id',isAttribute:false},
			year:{tag:'release_date',isAttribute:true,preProcessor:formatYear},
			genres:{tag:'genres',isAttribute:true,preProcessor:processGenres},			
			plot:{tag:'overview',isAttribute:true},
			director:{tag:'credits',isAttribute:true,preProcessor:processDirector},
			starring:{tag:'credits',isAttribute:true,preProcessor:processCast},
			runtime:{tag:'runtime',isAttribute:true,preProcessor:suffixRunTime},
			poster:{tag:'poster_path',isAttribute:true},
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

		function formatYear(year){
			return $filter('date')(year.replace('-',''),'yyyy');			
		}

		function suffixRunTime(runtime){
			return runtime + " mins";
		}

		function processGenres(genres){			
			return genres.map(function(genre){
				return genre.name;
			}).join();
		}

		function processCast(credits){
			return credits.cast.filter(function(actor,index){
				return index < MAX_CAST_COUNT;
			}).map(function(actor){
				return actor.name;
			}).join();
		}

		function processDirector(credits){
			return credits.crew.filter(function(person){
				return person.department === DIRECTOR_DEPARTMENT && person.job === DIRECTOR_JOB;
			}).map(function(director){
				return director.name;
			}).join();
		}

	}
])