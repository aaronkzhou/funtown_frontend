'use strict';
angular.module('selling').controller('AddProduct', ['$log','$scope','$http','AddProductService','AttributeService',
	function($log,$scope,$http,AddProductService,AttributeService) {	

		$log.debug("AddProduct controller");
		
		function init(){		
			$log.debug('AddProduct controller::init');
			$scope.product = {};	

			$scope.categories = [];	
			$scope.catalogueDetail = [];		
			$scope.stepsCompleted =0;
			// root category. The root categories have a parentId of zero 0
			$scope.categoryPath = [
				{
					categoryId:0,
					categoryName:'All categories'
				}
			];

			AddProductService.getRootCategories().then(function(categories){
				$scope.categories  = categories
			});
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
		}

		$scope.saveDraft = function(){
			$log.debug("saveDraft");
		}

		init();
	
 	}
])