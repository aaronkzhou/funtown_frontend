'use strict';
angular.module('buying').controller('ItemDetail', ['$log', '$scope', '$http', '$location', '$stateParams', 'ProductService', function($log, $scope, $http, $location, $stateParams, ProductService){

    $log.debug('ItemDetail::controller');
    $stateParams.pid = Math.floor((Math.random() * 4) + 1);
    console.log($stateParams.pid);

    ProductService.getSpecifyProduct($stateParams.pid).then(function(response){
        $scope.specifiedItem = response.data;
        console.log($scope.specifiedItem);
        console.log($scope.specifiedItem.catalog.catalogAttributes);

        // rearrange the order in a cloned array (this is selective)
        $scope.specifiedItemCatalogAttributes = ProductService.cloneArray($scope.specifiedItem.catalog.catalogAttributes);
        ProductService.reorderArreyByAttributeId($scope.specifiedItemCatalogAttributes);
        console.log($scope.specifiedItemCatalogAttributes);        

        // Display url
        console.log($location.path()); 

        // Here are the details of a specified item
        $scope.itemDetail = {};

        $scope.itemDetail.title = $scope.specifiedItem.catalog.title;        
        $scope.itemDetail.description = ProductService.findAttributeType("plot", $scope.specifiedItem.catalog.catalogAttributes);
        $scope.itemDetail.actors = ProductService.findAttributeType("starring", $scope.specifiedItem.catalog.catalogAttributes);
        $scope.itemDetail.format = $scope.specifiedItem.category.categoryName;
        $scope.itemDetail.year = ProductService.findAttributeType("year", $scope.specifiedItem.catalog.catalogAttributes);
        $scope.itemDetail.genres = ProductService.findAttributeType("genres", $scope.specifiedItem.catalog.catalogAttributes);
        $scope.itemDetail.runtime = ProductService.findAttributeType("runtime", $scope.specifiedItem.catalog.catalogAttributes);
        $scope.itemDetail.extra = $scope.specifiedItem.extraDetail;        
        $scope.itemDetail.sellerID = $scope.specifiedItem.sellerId;
        $scope.itemDetail.stock = $scope.specifiedItem.sku;
        $scope.itemDetail.poster = ProductService.findAttributeType("poster", $scope.specifiedItem.catalog.catalogAttributes);


    },function(error){
        $log.error(error);
    });
}]
)