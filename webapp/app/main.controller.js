'use strict';
angular.module('funtown').controller('MainController', ['$scope','$log','AuthService', 'ProductService',
	function($scope,$log,AuthService,ProductService){
		$log.debug('mainController');
		var productCatalog = [];
		function init(){
			$scope.searchBox = {};
			$scope.searchBox.catalogOverview = [];
			$scope.searchBox.productName = '';
		}
		$scope.username = function(){
			return AuthService.getUserName();
		}
		$scope.isAuthenticated = function(){
			return AuthService.isAuthenticated();
		}
		$scope.contentTransfer = function(content){
			return JSON.parse(content);
		}

		$scope.searchProductFromSearchIcon = function(productName){
			ProductService.searchProductFromSearchIcon(productName);
		}
		$scope.searchProductForCatalog = function(productName){
			// productCatalog = [];
			// ProductService.test();
			// if(productName.length > 0){
			// 	ProductService.searchProductForCatalog(productName).then(function(response){
			// 		().then(){().then(){}}
					// response.data.forEach(function(item){
					// 	productCatalog.push(item.categoryName);
					// });

					// console.log(response.data);
					// return response.data;
				// });
			// }
		}
		$scope.showCatalogDetail = function(){
			$log.debug("mainSearch::showCatalogDetail ",$scope.productCatalog);
		}
		init();
	}
])
