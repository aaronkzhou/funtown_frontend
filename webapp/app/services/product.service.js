'use strict';
angular.module('funtown').service('ProductService', ['$log','$http',
	function($log,$http){
		var test = this;
		$log.debug("ProductService");
		 this.searchProductFromSearchIcon = function(productName){
				this.searchProductForCatalog(productName).then(function(response){
					test.searchProductDetailsInSelectedCategory(productName,response.data[0].categoryId).then(function(response){
						//console.log(response.data[0]);
						test.getSpecifyProduct(response.data[0].productId).then(function(response){
							console.log(response.data)
						});

					});
				})
		 }

		this.searchProductForCatalog = function(product){
			console.log("goinside");
			$log.debug("ProductService::searchProductForCatalog - ",product);
			return $http({
				method:'GET',
				url: '/rest/api/products/search/q?title=' + product,
				transformResponse:searchOverviewTransformRequest,
				headers:{
					'Content-Type':undefined
				}
			});
		}
		this.searchProductDetailsInSelectedCategory = function(product,categoryId){
			$log.debug("ProductService::searchProductDetailsInSelectedCategory - ",product);
			return $http({
				method:'GET',
				url: '/rest/api/products/' + categoryId + '/search/q?title=' + product,
				// transformResponse:searchDetailTransformRequest,
				headers:{
					'Content-Type':undefined
				}
			});
		}
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
		this.updateProduct = function(product, pid){
			$log.debug("ProductService::updateProduct - ",product);
			return $http({
				method:'PUT',
				url:'/rest/api/selling/products/',
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
			var productAttributes = {};
			var attribute = "";
			var productPriceDetails = {};
			if(response === null){
				return "no related data found";
			}
			var responseProduct = JSON.parse(response);
			var product = angular.copy(responseProduct);
			product.rootCategory = {
				categoryId : product.category.parentId,
				childrenCount : product.category.parentId == 1?3:3,
				categoryName: product.category.parentId == 1 ?"Movies":"Games",
				parentId : 0
			};

			product.productAttributes.forEach(function(item){
				productAttributes[item.attributeType] = parseInt(item.attributeValue);
			});
			if(product.stock == -1){
				delete product.stock;
				product.unlimited = true;
			}
			product.productPriceDetails =  responseProduct.productPriceDetails.length>0 ? responseProduct.productPriceDetails[0] : {};

			product.shippingRateId = parseInt(responseProduct.shippingRateId);
			product.productAttributes = productAttributes;
			$log.debug("transformed product",product);
			return product;
		}

		function searchOverviewTransformRequest(response){
			//response.productName = productName;
			return (JSON.parse(response));
		}
		function searchDetailTransformRequest(request){
			return (JSON.parse(request));
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
