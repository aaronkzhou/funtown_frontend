'use strict';
angular.module('funtown').service('ProductService', ['$log','$http', 
	function($log,$http){
		$log.debug("ProductService");

		this.saveProduct = function(product){
			$log.debug("ProductService::saveProduct - ",product);

			return $http.post('/rest/api/products',product,{
				transformRequest:doTransformRequest
			})
		}

		function doTransformRequest(request){
			$log.debug("doTransformRequest");

			var productAttributes = [];	
			var product = JSON.parse(JSON.stringify(request));

			var productAttributesObj =  request.productAttributes;

			//Convert productAttributes from object to array of attribute objects
			for(var property  in productAttributesObj){
				productAttributes.push({attributeType:property,attributeValue:productAttributesObj[property]});
			}
			product.productAttributes = productAttributes;
			productAttributesObj = null;

			//send only selected payment methods
			if(request.paymentMethods){				
				product.paymentMethods = request.paymentMethods.filter(function(paymentMethod){
					return paymentMethod.selected;
				})
			}
			
			//Convert productPriceDetails from object to array of productPriceDetails objects
			product.productPriceDetails = request.productPriceDetails ? [request.productPriceDetails] : [];
			
			//Add rootCategory to catalog instead of directly in product object
			if(!product.catalog){				
				product.catalog = {}				
			}
			product.catalog.rootCategory = request.rootCategory;
			delete product.rootCategory;

			
			product.stock = product.unlimited ? -1 : product.stock;

			//Add shipping cost if not present
			if(!product.shippingCosts){
				product.shippingCosts = [];
			}else if(product.productId){ // Add product id if present
				product.shippingCosts = request.shippingCosts.map(function(shippingCost){
					shippingCost.productId = product.productId;
					return shippingCost;
				})
			}
			
			$log.debug("doTransformRequest:: transformed product - ",product);
			$log.debug("doTransformRequest:: transformed product - ",JSON.stringify(product));

			return JSON.stringify(product);

		}
	}
	
]);