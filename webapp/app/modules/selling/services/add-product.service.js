angular.module('selling').service('AddProductService', ['$http', '$q',
	function($http,$q){
		var categories = [];

		this.getRootCategories = function(){
			console.log("getRootCategories");
			var deferred = $q.defer();
			if(categories.length){
				console.log("returning from cache");
				children = getChildren(0);
				deferred.resolve(children); 
			}else{
				console.log("obtaining from server");
				$http.get('/rest/api/categories').then(function(response) {
	            	categories = response.data; 
	            	console.log(categories);  
	            	deferred.resolve(categories);     	
	        	})		
			}
        	return deferred.promise;
		}	

		this.getCategories = function(category){	
			console.log("getCategories");	
			var deferred = $q.defer();			
			var children = getChildren(category.categoryId);
			
			if(children.length){
				console.log("returning from cache");
				console.log(children);				
				deferred.resolve(children);
			}else if(category){				
				console.log("obtaining from server");	
				$http.get('/rest/api/categories/' + category.categoryId).then(function(response){
					deferred.resolve(response.data);
					categories.push.apply(categories,response.data); 
					console.log(categories);
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