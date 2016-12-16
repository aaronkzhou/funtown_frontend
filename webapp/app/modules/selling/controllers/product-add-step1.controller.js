'use strict';
angular.module('selling').controller('AddProductStep1', ['$log','$scope','AddProductService',
	function($log,$scope,AddProductService) {	
		$log.debug('AddProductStep1 controller');
		$log.debug('AddProductStep1',$scope.categories);


		function init(){
			//if category is alreday set get the child categories for the last path.
			if($scope.product.category){
				getPathCategories($scope.categoryPath[$scope.categoryPath.length-1]);
			}			
		}

		// select the category if no children present or drill down to child categories
		$scope.selectCategory = function(category){	
			$log.debug('selectCategory');
			$scope.product.category = null;
			$scope.updoStepCompleted(1);
			if(category.childrenCount > 0){
				$scope.categoryPath.push(category);
				AddProductService.getCategories(category).then(function(categories){
					$scope.categories  = categories
				});
			}else {
				$scope.product.category = category;
				$scope.stepCompleted(1);
			}	
	    }

	    // goTo the selected parent category and show its child categories
	    $scope.goTo = function(path){    	
	    	$scope.product.category = null;
	    	$scope.updoStepCompleted(1);
	    	var index = $scope.categoryPath.indexOf(path);
	    	$scope.categoryPath.splice(index+1, $scope.categoryPath.length - index);     	
			getPathCategories(path);
	    }

	    // get categories for a path
	    function getPathCategories(path){
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
	    $scope.isNextDisabled = function(){
	    	return !($scope.product.category && $scope.product.category.categoryId);
	    }

	    init();
	}
])
