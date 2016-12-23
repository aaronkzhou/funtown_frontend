'use strict';
angular.module('selling').controller('AddProduct', ['$log','$scope','$http',
	function($log,$scope,$http) {	
		var STEP_NO=0;
		$log.debug("AddProduct controller");
		
		function init(){		
			$log.debug('AddProduct controller::init');

			//Cache object
			$scope.cache = {}
			//Cache product
			$scope.cache.product = {};
			//Cache states across steps
			$scope.cache.state = {};
			$scope.cache.state.catalogType = 'auto';
			$scope.cache.state.selectedCatalog = {};

			$scope.stepsCompleted =STEP_NO;
			// root category. The root categories have a parentId of zero 0
			$scope.cache.state.categoryPath = [
				{
					categoryId:0,
					categoryName:'All categories'
				}
			];
		}

		$scope.updoStepCompleted = function(step){
			$scope.stepsCompleted = step-1;	
		}		

		$scope.stepCompleted = function(step){
			if($scope.stepsCompleted < step){
				$scope.stepsCompleted = step;	
			}
		}

		$scope.isStepDeactive = function(step){
			return step > $scope.stepsCompleted+1;
		}

		$scope.resetProduct = function(){
			$scope.product = {};
		}

		$scope.cancel = function(){
			$log.debug("cancel");
			$scope.product = {};		
			$scope.cache.state.categoryPath = [
				{
					categoryId:0,
					categoryName:'All categories'
				}
			];	
		}

		$scope.saveDraft = function(){
			$log.debug("saveDraft");
		}

		init();
	
 	}
])