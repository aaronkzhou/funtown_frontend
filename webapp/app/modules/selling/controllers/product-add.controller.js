'use strict';
angular.module('selling').controller('AddProduct', ['$log','$scope','$http',
	function($log,$scope,$http) {	
		var STEP_NO=0;
		$log.debug("AddProduct controller");
		
		function init(){		
			$log.debug('AddProduct controller::init');

			$scope.product = {};
			$scope.product.catalogType = 'auto';
			$scope.stepsCompleted =STEP_NO;
			// root category. The root categories have a parentId of zero 0
			$scope.categoryPath = [
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

		$scope.cancel = function(){
			$log.debug("cancel");
			$scope.product = {};		
			$scope.categoryPath = [
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