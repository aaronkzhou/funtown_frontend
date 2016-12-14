angular.module('selling').controller('AddProduct', ['$scope','$http',
	function($scope,$http) {	
	// define the new product	
	$scope.product = {};
	// define a varible to store the final category customer chose
	var finalCategory ;
	// disable the submit button
	$scope.finishButton = true;
	// define the root category
	$scope.categoryPath = [
		{
			categoryId:0,
			categoryName:'All categories',
			parentId:99,
			childrenCount:2
		}
	];
		// get the level one categories from server
	$http.get('/rest/api/categories').then(function(response){

		$scope.categories = response.data;
	})

	// when click the categories from option div
	$scope.selectCategory = function(category){	

		if(category.childrenCount > 0){

			$scope.product.category ={} ;
			finalCategory = false;
			checkFinish(finalCategory);

			$scope.categoryPath.push(category);

			$http.get('/rest/api/categories/' + category.categoryId).then(function(response){
				
				$scope.categories = response.data;
			})
		}else {

			$scope.product.category = category;
			finalCategory = category.categoryName;
			checkFinish(finalCategory);
		}	
    }

    $scope.isSelectCategory = function(id){
    	return $scope.product.category && $scope.product.category.categoryId === id;
    }
    //when click the categories from path div
    $scope.showCategory = function(categoryList){

    	$scope.product.category ={} ;
		finalCategory = false;
		checkFinish(finalCategory);

    	var index = $scope.categoryPath.indexOf(categoryList);
    	
    	$scope.categoryPath.splice(index+1, 1);
    	
    	$http.get('/rest/api/categories/' + categoryList.categoryId).then(function(response){
				
				$scope.categories = response.data;
			})
    }

    $scope.isLast = function(index){
    	return index === $scope.categoryPath.length-1;
    }

    checkFinish = function(finalCategory){

    	if(finalCategory) {
    		$scope.finishButton = false;
    	} else {
    		$scope.finishButton = true;
    	}
    	return $scope.finishButton;   	
    }
 }
])