'use strict';
var GamesCatalog = function(funtownCatalogService,log,q){
	var gamesCatalog = this;

	var funtownCatalogService = funtownCatalogService;
	var log = log;
	var q = q;

	gamesCatalog.searchCatalogue = function(search,rootCategory){
		log.debug("searchCatalogue" , search,rootCategory);
		var deferred = q.defer();

		return deferred.promise;
	}
};

