'use strict';
angular.module('selling').controller('AddProductStep5', ['$log','$scope','AttributeService','ShippingTempalateService',
	function($log,$scope,AttributeService,ShippingTempalateService){
		$log.debug('AddProductStep5 controller');
		var STEP_NO = 5;		
		var pickUpOption       = {cost: 0,description: "pickUp"};
		var freeShippingOption = {cost: 0,description: "freeShipping"};
			function init(){
			$log.debug("AddProductStep5::init");

			$scope.addTemplate = false;
			$scope.templateReadOnly = true;			
			
			if($scope.cache.product.category){
				$scope.shippingRates = AttributeService.getAttributesFor('shippingRates',$scope.cache.product.category.categoryId);
			}else{
				$log.warn("Category not yet set.");
			}			
			
			ShippingTempalateService.getShippingTemplates().then(function(response){
				$scope.templates = response;
			});

			//Add inital object if not present
			if(!$scope.cache.product.shippingCosts){
				//Shipping options in final product
				$scope.cache.product.shippingCosts = [];
				//Shipping cost options added by user - state level
				$scope.cache.state.shippingCosts = []	
			}
						
			//hide shipping options if chose "must pick-up" in last version
			if($scope.cache.state.pickUp === 'mustPickup'){
				$scope.shippingDisabled = true;
			}	
		}

		$scope.addShippingTemplate = function(){
			$scope.addTemplate = true;
			$scope.templateOperator = "Create a new shipping template";
			$scope.addTemplate = {};
			$scope.processSpecificCost();

		}

		$scope.postTemplate = function(){
			$log.debug("postShippingTemplate");
			$scope.addTemplate.shippingCosts = [];
			$scope.cache.state.shippingCosts.forEach(function(shippingCost){
				$scope.addTemplate.shippingCosts.push(shippingCost);
			});

			ShippingTempalateService.postTemplate($scope.addTemplate).then(function(response){
				$scope.templates.push(response);
			});
			$scope.cache.state.shippingCosts = [];
			$scope.addTemplate = false;
		}
		
		$scope.cancelAddTemplate = function(){
			$scope.cache.state.shippingCosts = [];
			$scope.addTemplate = false;
		}

		$scope.processEditTemplate = function(){
			$scope.templateReadOnly = false;
		}

		$scope.editTemplateAddCost = function(){
			$scope.cache.templateDisplay.shippingCosts.push({});
		}

		$scope.editTemplateRemoveCost = function(shippingCost){
			var costIndex = $scope.cache.templateDisplay.shippingCosts.indexOf(shippingCost);
			$scope.cache.templateDisplay.shippingCosts.splice(costIndex, 1);
		}

		$scope.saveEditTemplate = function(){
			var oldTemplateIndex = $scope.templates.findIndex(function(template){
				return template.templateId === $scope.cache.templateDisplay.templateId;
			});
			$scope.templates.splice(oldTemplateIndex,1);
			ShippingTempalateService.saveEditTemplate($scope.cache.templateDisplay)
			.then(function(response){
				$scope.templates.push(response);
				$log.debug('new templates',$scope.templates)
			});	
			$scope.templateReadOnly = true;		
		}
		$scope.isNotOnlyPick = function(){
			return $scope.cache.state.pickUp !== 'mustPickup';
		}

		$scope.processPickUp = function(){
			if($scope.cache.state.pickUp === 'noPickUp'){
				$scope.shippingDisabled = false;
				removeShippingOptions(pickUpOption)
			}				
			else if($scope.cache.state.pickUp === 'canPickUp'){
				$scope.shippingDisabled = false;										
				addShippingOptions(pickUpOption)
			}
			else if($scope.cache.state.pickUp === 'mustPickup'){
				$scope.shippingDisabled = true;				
				//reset product shipping options and add only pickup option
				resetShippingOptions();
				$scope.cache.state.shippingType = null;
				addShippingOptions(pickUpOption)
			}
		}
		
		$scope.processFreeShipping = function(){
			addShippingOptions(freeShippingOption);
		}

		$scope.processSpecificCost = function(){
			if($scope.cache.state.shippingCosts.length === 0){
				$scope.cache.state.shippingCosts.push({});
			}
			removeShippingOptions(freeShippingOption);		
		}

		$scope.addCostOption = function(){
			$scope.cache.state.shippingCosts.push({});
		}

		$scope.removeCostOption = function(shippingCost){
			var index = $scope.cache.state.shippingCosts.indexOf(shippingCost);
			$scope.cache.state.shippingCosts.splice(index, 1);
		}

		var removeShippingOptions = function(option){
			var index = $scope.cache.product.shippingCosts.findIndex(function(shippingCost){				
				return (shippingCost.cost === option.cost && shippingCost.description === option.description );
			});
			
			if(index !== -1){
				$scope.cache.product.shippingCosts.splice(index,1);
			}
		}

		var addShippingOptions = function(option){			
			var index = $scope.cache.product.shippingCosts.findIndex(function(shippingCost){
				return (shippingCost.cost === option.cost && shippingCost.description === option.description );
			});
			
			if(index === -1){
				$scope.cache.product.shippingCosts.push(option);
			}
		}

		var resetShippingOptions = function(option){
			$scope.cache.product.shippingCosts = [];
		}

		// when click "save" or "next", add the "cache.shippingCosts" into product
		$scope.storeShippingCosts = function(saveDraft){
			$log.debug("storeShippingCosts");
			if($scope.cache.state.shippingType === "specific"){
				$scope.cache.state.shippingCosts.filter(function(shippingCost){
					return $scope.cache.product.shippingCosts.indexOf(shippingCost) === -1;
				}).forEach(function(distinctCost){
					$scope.cache.product.shippingCosts.push(distinctCost);
				})
			}			
			$log.debug("storeShippingCosts",$scope.cache.product.shippingCosts);
			if(saveDraft){
				$scope.saveDraft();
			}
		}

		// check if the next button should be enabled
		$scope.$watch("shippingInfo.$valid",function(validity){
			if($scope.shippingInfo.$valid){
	    		$scope.stepCompleted(STEP_NO);
	    		$scope.isNextDisabled = false;
	    	}else{
	    		$scope.updoStepCompleted(STEP_NO);	    	
	    		$scope.isNextDisabled = true;
	    	}	
		}) 
	  
		init();
	
	}
])