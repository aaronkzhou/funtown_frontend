'use strict';
angular.module('selling').service('AddProductService', ['$log','$http', '$q',
	function($log,$http,$q){
		var categories = [];

		this.getRootCategories = function(){
			var deferred = $q.defer();
			if(categories.length){
				$log.debug("returning root categories from cache");
				//the root categories have a parentId of zero 0
				var children = getChildren(0);
				deferred.resolve(children); 
			}else{
				$log.debug("obtaining root categories from server");
				$http.get('/rest/api/categories').then(function(response) {
	            	deferred.resolve(response.data);     	
	            	categories = response.data; 
	            	$log.debug("AddProductService::categories=",categories);  
	        	})		
			}
        	return deferred.promise;
		}	

		this.getCategories = function(category){	
			var deferred = $q.defer();			
			var children = getChildren(category.categoryId);
			
			if(children && children.length){
				$log.debug("returning child categories from cache");
				$log.debug(children);				
				deferred.resolve(children);
			}else if(category){				
				$log.debug("obtaining child categories from server");	
				$http.get('/rest/api/categories/' + category.categoryId).then(function(response){
					deferred.resolve(response.data);
					categories.push.apply(categories,response.data); 
					$log.debug("AddProductService::categories=" , categories);
				})
			}	
			return deferred.promise;		
		}

		function getChildren(parentId){
			return categories.filter(function(category){
				return category.parentId === parentId;
			})
		}
	}
])