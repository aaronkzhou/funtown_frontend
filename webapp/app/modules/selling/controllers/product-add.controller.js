angular.module('selling').controller('AddProduct', ['$scope','$http','AddProductService',
	function($scope,$http,AddProductService) {	
	
	$scope.product = {};	
		
	// root category
	$scope.categoryPath = [
		{
			categoryId:0,
			categoryName:'All categories'
		}
	];

	AddProductService.getRootCategories().then(function(categories){
		$scope.categories  = categories
	});


	// select the category if no children present or drill down to child categories
	$scope.selectCategory = function(category){	
		$scope.product.category = null;
		if(category.childrenCount > 0){
			$scope.categoryPath.push(category);
			AddProductService.getCategories(category).then(function(categories){
				$scope.categories  = categories
			});
		}else {
			$scope.product.category = category;
		}	
    }

    // goTo the selected parent category and show its child categories
    $scope.goTo = function(path){    	
    	$scope.product.category = null;
    	var index = $scope.categoryPath.indexOf(path);
    	$scope.categoryPath.splice(index+1, $scope.categoryPath.length - index);     	
		AddProductService.getCategories(path).then(function(categories){
			$scope.categories  = categories
		});
    }

    // check if the category is selected
    $scope.isSelected = function(id){
    	return $scope.product.category && $scope.product.category.categoryId === id;
    }

	// check if the path is last
    $scope.isLastPath = function(index){
    	return index === $scope.categoryPath.length-1;
    }

    // check if the next button should be enabled
    $scope.enableNext = function(){
    	console.log($scope.product.category)
    	return !($scope.product.category && $scope.product.category.categoryId);
    }
 }
])