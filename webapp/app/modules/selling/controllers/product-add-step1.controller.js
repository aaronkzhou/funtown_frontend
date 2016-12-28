'use strict';
angular.module('selling').controller('AddProductStep1', ['$log','$scope','CategoryService',
	function($log,$scope,CategoryService) {	
		$log.debug('AddProductStep1::controller');
		
		var STEP_NO = 1;
		var rootCategory = null;

		function init(){
			//if category is alreday set get the child categories for the last path 
			//else get the root categories.
			if($scope.cache.product.category){
				getPathCategories($scope.cache.state.categoryPath[$scope.cache.state.categoryPath.length-1]);
			}else{
				CategoryService.getRootCategories().then(function(categories){
					$scope.categories  = categories
				});
			}			
		}

		// select the category if no children present or drill down to child categories
		$scope.selectCategory = function(category){	
			$log.debug('AddProductStep1::selectCategory - ',category);				
			$scope.resetProduct();
			//if this is the root category set it on product
			if(category.parentId===0){
				$scope.cache.state.rootCategory = category.categoryName;
				rootCategory = category;
			}
			if(category.childrenCount > 0){
				$scope.cache.state.categoryPath.push(category);
				CategoryService.getCategories(category).then(function(categories){
					$scope.categories  = categories
				});
			}else {
				$scope.cache.product.category = category;
				$scope.cache.product.rootCategory = rootCategory;
			}	
	    }

	    // goTo the selected parent category and show its child categories
	    $scope.goTo = function(path){
	    	$scope.resetProduct();
	    	var index = $scope.cache.state.categoryPath.indexOf(path);
	    	$scope.cache.state.categoryPath.splice(index+1, $scope.cache.state.categoryPath.length - index -1);     	
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
	    	return $scope.cache.product.category && $scope.cache.product.category.categoryId === id;
	    }

		// check if the path is last
	    $scope.isLastPath = function(index){
	    	return index === $scope.cache.state.categoryPath.length-1;
	    }

	    // check if the next button should be enabled
	    $scope.isNextDisabled = function(){
	    	if($scope.cache.product.category && $scope.cache.product.category.categoryId){
	    		$scope.stepCompleted(STEP_NO);
	    		return false;
	    	}else{
	    		$scope.updoStepCompleted(STEP_NO);
	    		return true;
	    	}
	    }

	    init();
	}
])
