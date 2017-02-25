'use strict';
angular.module('selling').controller('AddProductStep5', ['$log','$scope','AttributeService','ShippingTempalateService','AlertsService',
	function($log,$scope,AttributeService,ShippingTempalateService,AlertsService){
		$log.debug('AddProductStep5 controller');
		var STEP_NO = 5;		
		var pickUpOption       = {cost: 0,description: "pickUp"};
		var freeShippingOption = {cost: 0,description: "freeShipping"};
		var oldTemplate = null;
		var specificShippingTemplate;
		var selectedPayment;
		var oldPaymentMethods;
		function init(){
			$log.debug("AddProductStep5::init");
			$scope.alertMessage.edit = {
											message: "You want to save the modifications to this template.",
										  	buttons:[
										  		{name:'Yes',action:"saveEditTemplate"},
										  		{name:'No'}]
										  };

			$scope.alertMessage.delete = {
										  message: "You want to delete this template.",
										  buttons:[
										  		{name:'Yes',action:"deleteTemplate"},
										  		{name:'No'}]
										 };
						
			$scope.templateReadOnly = true;			
			
			if($scope.cache.product.category){
				$scope.shippingRates = AttributeService.getAttributesFor('shippingRates',$scope.cache.product.category.categoryId);
			}else{
				$log.warn("Category not yet set.");
			}			
			console.log($scope.cache.product);
			ShippingTempalateService.getShippingTemplates().then(function(response){
				$log.debug('getShippingTemplates');
				$scope.templates = response;
				if(response.length === 0){
					$scope.haveNoTemplate = true;
				}
                specificShippingTemplate = $scope.templates.filter(function(item){
                    return item.templateId == $scope.cache.product.shippingTemplateId;
                });
                $scope.cache.templateDisplay = specificShippingTemplate[0];
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

			if($scope.cache.product.category){
				if($scope.cache.product.oldPaymentMethods){
					selectedPayment = $scope.cache.product.oldPaymentMethods;	
				}

				$scope.cache.product.paymentMethods = AttributeService.getAttributesFor('paymentMethods',$scope.cache.product.category.categoryId);
					$scope.cache.product.paymentMethods.map(function(paymentMethod){
						return paymentMethod.selected = false;
					});
				if(selectedPayment){
					$scope.cache.product.paymentMethods.forEach(function(item){
						selectedPayment.forEach(function(selectedItem){
							if(selectedItem.attributeId == item.attributeId){
								item.selected = true;
							}
						})	
					});
				}
			}else{
				$log.warn("Category not yet set.");
			}
		}



		$scope.isNotOnlyPick = function(){
			return $scope.cache.state.pickUp !== 'mustPickup';
		}

		$scope.processPickUp = function(){
			if($scope.cache.state.pickUp === 'noPickUp'){
				$scope.shippingDisabled = false;
				$scope.cache.state.noCashPayment = true;
				removeShippingOptions(pickUpOption);
				unselectCashPayment();
			}				
			else if($scope.cache.state.pickUp === 'canPickUp'){
				$scope.shippingDisabled = false;
				$scope.cache.state.noCashPayment = false;										
				addShippingOptions(pickUpOption)
			}
			else if($scope.cache.state.pickUp === 'mustPickup'){
				$scope.shippingDisabled = true;	
				$scope.cache.state.noCashPayment = false;			
				//reset product shipping options and add only pickup option
				resetShippingOptions();
				$scope.cache.state.shippingType = null;
				addShippingOptions(pickUpOption)
			}
		}
		function unselectCashPayment(){
			$scope.cache.product.paymentMethods.forEach(function(item){
				if(item.value == 'cash'){
					item.selected = false;
				}
			});
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

		$scope.processUseTemplate = function(){
			$scope.cache.state.shippingCosts = [];			
			removeShippingOptions(freeShippingOption);		
		}

		$scope.addShippingTemplate = function(){
			// $scope.addTemplate = true;
			// $scope.templateOperator = "Create a new shipping template";
			// $scope.addTemplate = {};
			// $scope.processSpecificCost();
			$scope.cache.templateDisplay = {};
			$scope.cache.templateDisplay.templateName = null;
			$scope.cache.templateDisplay.shippingCosts = [];
			$scope.cache.templateDisplay.shippingCosts.push({});
			$scope.templateReadOnly = false;
			$scope.mode = "Add";
		}


		$scope.addCostOption = function(){
			$scope.cache.state.shippingCosts.push({});
		}

		$scope.removeCostOption = function(shippingCost){
			var index = $scope.cache.state.shippingCosts.indexOf(shippingCost);
			$scope.cache.state.shippingCosts.splice(index, 1);
		}

		function removeShippingOptions(option){
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

		var resetShippingOptions = function(){
			$scope.cache.product.shippingCosts = [];
		}


		$scope.postNewTemplate = function(){
			$log.debug("postShippingTemplate");
			var progressAlert = AlertsService.notify("Create a new template...");
			$scope.addTemplate.shippingCosts = [];
			$scope.cache.state.shippingCosts.forEach(function(shippingCost){
				$scope.addTemplate.shippingCosts.push(shippingCost);
			});

			ShippingTempalateService.postTemplate($scope.addTemplate).then(function(response){
				$scope.templates.push(response);
				$scope.cache.templateDisplay = response;
				$scope.haveNoTemplate = false;
				progressAlert.hide();
				AlertsService.notify("New template added.","success");
				$scope.cache.state.shippingCosts = [];				
				$scope.mode = null;
			},function(error){
				$log.error(error);
				progressAlert.hide();
				AlertsService.notify("Unable to add new template.","error");
			});			
		}
		
		$scope.cancelAddTemplate = function(){
			$scope.cache.state.shippingCosts = [];			
			$scope.mode = null;
		}

		
		$scope.deleteTemplate = function(){
			$log.debug("deleteTemplate");
			var progressAlert = AlertsService.notify("Delete template...");
			
			ShippingTempalateService.deleteTemplate($scope.cache.templateDisplay.templateId)
			.then(function(response){
				$scope.templates = response;
				if(response.length === 0){
					$scope.haveNoTemplate = true;
				}
				$scope.cache.templateDisplay = false;
				progressAlert.hide();
				AlertsService.notify("Template deleted.","success");
			},function(error){
				$log.error(error);
				progressAlert.hide();
				AlertsService.notify("Unable to delete this template.","error");
			});
		}

		$scope.processEditTemplate = function(){
			$scope.templateReadOnly = false;
			$scope.mode = "Edit";
			oldTemplate = angular.copy($scope.cache.templateDisplay);		
		}

		$scope.editTemplateAddCost = function(){
			$scope.cache.templateDisplay.shippingCosts.push({});
		}

		$scope.editTemplateRemoveCost = function(shippingCost){
			var costIndex = $scope.cache.templateDisplay.shippingCosts.indexOf(shippingCost);
			$scope.cache.templateDisplay.shippingCosts.splice(costIndex, 1);
		}

		$scope.createTemplate = function(){
			var progressAlert = AlertsService.notify("Creating template...");
			ShippingTempalateService.createTemplate($scope.cache.templateDisplay)
			.then(function(response){
				$scope.templates.push(response);
				progressAlert.hide();
				AlertsService.notify("Template created successfully.","success");
				$scope.mode = null;
				$scope.templateReadOnly = true;	
			},function(error){
				$log.error(error);
				progressAlert.hide();
				AlertsService.notify("Unable to create the template.","error");
			});	
		}

		$scope.editTemplate = function(){
			$log.debug("EditTemplate");			
			
			var progressAlert = AlertsService.notify("Updating template...");
			
			var oldTemplateIndex = $scope.templates.findIndex(function(template){
				return template.templateId === $scope.cache.templateDisplay.templateId;
			});
			$scope.templates.splice(oldTemplateIndex,1);
			
			ShippingTempalateService.editTemplate($scope.cache.templateDisplay)
			.then(function(response){
				$scope.templates.push(response);
				progressAlert.hide();
				AlertsService.notify("Template updated successfully.","success");
				$scope.mode = null;
				$scope.templateReadOnly = true;	
			},function(error){
				$log.error(error);
				progressAlert.hide();
				AlertsService.notify("Unable to update the template.","error");
			});	
		}

		$scope.cancelEditTemplate = function(){
			$scope.cache.templateDisplay = oldTemplate;
			$scope.templateReadOnly = true;	
			$scope.mode = null;		
		}

		$scope.isEdit = function(){
			return $scope.mode === "Edit";
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
			if($scope.cache.state.shippingType === "template"){
				$scope.cache.product.shippingTemplateId = $scope.cache.templateDisplay.templateId;
			}
			if(saveDraft){
				$scope.saveDraft();
			}
		}



		$scope.editProduct = function(){
			$log.debug("editProduct");
			//add the "cache.shippingCosts" into product
			$scope.storeShippingCosts(false);
			$scope.edit();
		}

		//check if atleast on payment method is selected
		$scope.atleastOneChecked = function(){
			return !$scope.cache.product.paymentMethods.some(function(paymentMethod){
				return paymentMethod.selected;
			})				
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

		// check if the save button should be enabled
		$scope.$watch("template.$valid",function(validity){		
			if($scope.template){
				$log.debug("$scope.template.$valid = ", $scope.template.$valid);	
				$scope.cannotSave = !$scope.template.$valid;

			}
		})
	  
		init();
	
	}
])