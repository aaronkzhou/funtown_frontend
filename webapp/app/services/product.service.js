'use strict';
angular.module('funtown').service('ProductService', ['$log','$http', 
	function($log,$http){
		$log.debug("ProductService");

		this.saveProduct = function(product){
			$log.debug("ProductService::saveProduct - ",product);

			return $http({
				method:'POST',
				url: '/rest/api/selling/products',
				data:product,
				transformRequest:doTransformRequest,
				headers:{
					'Content-Type':undefined
				}
			})
		}
		this.getSpecifyProduct = function(pid){
			$log.debug("ProductService::getSpecifyProduct - PID - ", pid);
			var specifyProductDetail = $http({
				method:'GET',
				url: '/rest/api/products/' + pid,
				transformResponse:doTransformDatabaseCall
			});
			return specifyProductDetail;
		}

		function doTransformDatabaseCall(response){
			$log.debug("doTransformDatabaseCall");
			if(response === null){
				return "no related data found";
			}
			var product = angular.copy(JSON.parse(response));
			product.rootCategory = {
				categoryId : product.category.parentId,
				childrenCount : product.category.parentId == 1?3:3,
				parentId : 0
			};
			var productAttributes ={
				classfication:product.productAttributes[0].attributeValue,
				region:product.productAttributes[1].attributeValue,
				discs:product.productAttributes[2].attributeValue,
				condition:product.productAttributes[3].attributeValue
			};
			product.productAttributes=productAttributes;
			console.log(product);
			return product;
		}

		function doTransformRequest(request){
			$log.debug("doTransformRequest");

			var productAttributes = [];	
			var product = angular.copy(request);//JSON.parse(JSON.stringify(request));

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

			
			product.stock = request.unlimited ? -1 : request.stock;

			//Add shipping cost if not present
			if(!product.shippingCosts){
				product.shippingCosts = [];
			}else if(request.productId){ // Add product id if present
				product.shippingCosts = request.shippingCosts.map(function(shippingCost){
					shippingCost.productId = request.productId;
					return shippingCost;
				})
			}

			product.status = request.status || "IN_DRAFT";
			

			$log.debug("product.productPhotos 	",product.productPhotos);					

			delete product.productPhotos;	

			var formData = new FormData();
			
			if(request.productPhotos){
				request.productPhotos.forEach(function(photo){
					if(photo.file){
						formData.append("file",photo.file.file);			
					}
				})
			}
			
			//Add the product object as blog so that the context type can be set.
			formData.append("product",new Blob([JSON.stringify(product)],{type: 'application/json'}));
			
			$log.debug("doTransformRequest:: transformed product - ",formData.get("product"));			

			//$log.debug("doTransformRequest:: transformed product - ",JSON.stringify(formData));

			return formData;

		}
	}
	
]);