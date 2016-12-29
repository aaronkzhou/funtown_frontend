var MoviesCatalog = function(movieDbCatalogService,funtownCatalogService,log,q){
	var moviesCatalog = this;
	var movieDbCatalogService = movieDbCatalogService; 
	var funtownCatalogService = funtownCatalogService;
	var log = log;
	var q = q;

	//Search catalog in themoviedb.org if not found search in funtown db
	moviesCatalog.searchCatalogue = function(search,rootCategory){
		log.debug("MoviesCatalog::searchCatalogue" , search,rootCategory);
		var deferred = q.defer();
		movieDbCatalogService.getCatalog(search).then(function(response){
			if(response.data.results.length>0){
				deferred.resolve(response.data.results);
			}else{
				funtownCatalogService.getCatalog(search,rootCategory).then(function(response){
					deferred.resolve(response.data);
				})
			}
		},function(error){
			log.error(error);
			log.debug("checking funtown...");
			funtownCatalogService.getCatalog(search,rootCategory).then(function(response){
				deferred.resolve(response.data);
			})
		});

		return deferred.promise;
	}

	//Get details for selected catalog and process it
	moviesCatalog.getCatalogDetails = function(selectedCatalog){
		log.debug("MoviesCatalog::getCatalogueDetails" , selectedCatalog);
		
		//themoviedb.org had id while funtown has catalogId
		if(selectedCatalog.id){
			return movieDbCatalogService.getCatalogDetails(selectedCatalog.id);		
		}else{
			return funtownCatalogService.getCatalogDetails(selectedCatalog.catalogId)
		}
	}

	return  moviesCatalog;
};
