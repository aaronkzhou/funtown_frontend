'use strict';
angular.module('selling').controller('AddProductStep1', ['$log','$scope','CategoryService',
	function($log,$scope,CategoryService) {	
		$log.debug('AddProductStep1::controller');
		
		var STEP_NO = 1;

		function init(){
			//if category is alreday set get the child categories for the last path 
			//else get the root categories.
			if($scope.product.category){
				getPathCategories($scope.categoryPath[$scope.categoryPath.length-1]);
			}else{
				CategoryService.getRootCategories().then(function(categories){
					$scope.categories  = categories
				});
			}			
		}

		// select the category if no children present or drill down to child categories
		$scope.selectCategory = function(category){	
			$log.debug('AddProductStep1::selectCategory - ',category);
			$scope.product.category = null;
			$scope.product.catalog = null;
			$scope.updoStepCompleted(STEP_NO);

			//if this is the root category set it on product
			if(category.parentId===0){
				$scope.product.rootCategory = category.categoryName;
			}
			if(category.childrenCount > 0){
				$scope.categoryPath.push(category);
				CategoryService.getCategories(category).then(function(categories){
					$scope.categories  = categories
				});
			}else {
				$scope.product.category = category;
				$scope.stepCompleted(STEP_NO);
			}	
	    }

	    // goTo the selected parent category and show its child categories
	    $scope.goTo = function(path){    	
	    	$scope.product.category = null;
	    	$scope.product.catalog = null;
	    	$scope.updoStepCompleted(STEP_NO);
	    	var index = $scope.categoryPath.indexOf(path);
	    	$scope.categoryPath.splice(index+1, $scope.categoryPath.length - index -1);     	
			getPathCategories(path);
	    }

	    // get categories for a path
	    function getPathCategories(path){
	    	CategoryService.getCategories(path).then(function(categories){
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
