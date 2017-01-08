'use strict';
angular.module('manage').config(['$stateProvider',
	function($stateProvider) {
		$stateProvider
		.state('manage',{
			url:'/manage',		
			abstract : true,	
			templateUrl:'app/modules/manage/views/manage-side-nav.view.html'			
		})
		.state('manage.home',{
			url:'',
			templateUrl:'app/modules/manage/views/manage.view.html'				
		})
		//Accounts
		.state('manage.funtownAccount',{
			url:'/funtownAccount',
			templateUrl:'app/modules/account/views/funtown-account.view.html'
		})
		.state('manage.paynowAccount',{
			url:'/paynowAccount',
			templateUrl:'app/modules/account/views/paynow-account.view.html'
		})
		//Buying
		.state('manage.orders',{
			url:'/orders',
			templateUrl:'app/modules/buying/views/orders.view.html'
		})
		.state('manage.watchlist',{
			url:'/watchlist',
			templateUrl:'app/modules/buying/views/watchlist.view.html'
		})
		.state('manage.shippingAddress',{
			url:'/shippingAddress',
			templateUrl:'app/modules/buying/views/shippingAddress.view.html'
		})

		//Selling

		//Products List
		.state('manage.products',{
			url:'/products',
			templateUrl:'app/modules/selling/views/products-list-tabs.view.html',
			resolve:{
				tabs : function(ProductsListService){
					return ProductsListService.getTablist()
				}
			},
			controller:function($scope,tabs){
				$scope.tabs = tabs;
				$scope.tabs.forEach(function(tab){
					tab.state = "manage.products." + tab.statusCode;
				});
			}
		})
		.state('manage.products.ACTIVE',{
			url:'/selling',			
			templateUrl:'app/modules/selling/views/products-list.view.html',
			resolve:{
				products: function(ProductsListService){
					return ProductsListService.getProductsOfStatus("ACTIVE");
				}
			},
			controller:'ProductsList'
			
		})
		.state('manage.products.SOLD',{
			url:'/sold',			
			templateUrl:'app/modules/selling/views/products-list.view.html',
			resolve:{
				products: function(ProductsListService){
					return ProductsListService.getProductsOfStatus("SOLD");
				}
			},
			controller:'ProductsList'
		})
		.state('manage.products.OUT_OF_STOCK',{
			url:'/outOfStock',
			templateUrl:'app/modules/selling/views/products-list.view.html',
			resolve:{
				products: function(ProductsListService){
					return ProductsListService.getProductsOfStatus("OUT_OF_STOCK");
				}
			},
			controller:'ProductsList'
		})
		.state('manage.products.DE_ACTIVE',{
			url:'/deactive',
			templateUrl:'app/modules/selling/views/products-list.view.html',
			resolve:{
				products: function(ProductsListService){
					return ProductsListService.getProductsOfStatus("DE_ACTIVE");
				}
			},
			controller:'ProductsList'
		})
		.state('manage.products.IN_DRAFT',{
			url:'/indraft',
			templateUrl:'app/modules/selling/views/products-list.view.html',
			resolve:{
				products: function(ProductsListService){
					return ProductsListService.getProductsOfStatus("IN_DRAFT");
				}
			},
			controller:'ProductsList'
		})
		
		//addProduct
		.state('manage.addProduct',{
			url:'/addProduct',
			controller:'AddProduct',
			abstract : true,
			templateUrl:'app/modules/selling/views/products-add.view.html',
			resolve:{
				AttributeService: function(AttributeService){
					return AttributeService;
				}
			},
			params:{
				title:'add'
			}
		})
		.state('manage.addProduct.step1',{
			url:'/step1',
			controller:'AddProductStep1',		
			templateUrl:'app/modules/selling/views/products-add-step1.view.html'
		})
		.state('manage.addProduct.step2',{
			url:'/step2',
			controller:'AddProductStep2',	
			templateUrl:'app/modules/selling/views/products-add-step2.view.html'
		})
		.state('manage.addProduct.step3',{
			url:'/step3',
			controller:'AddProductStep3',
			templateUrl:'app/modules/selling/views/products-add-step3.view.html'
		})
		.state('manage.addProduct.step4',{
			url:'/step4',
			controller:'AddProductStep4',
			templateUrl:'app/modules/selling/views/products-add-step4.view.html'
		})
		.state('manage.addProduct.step5',{
			url:'/step5',
			controller:'AddProductStep5',
			templateUrl:'app/modules/selling/views/products-add-step5.view.html'
		})
		.state('manage.addProduct.step6',{
			url:'/step6',
			controller:'AddProductStep6',
			templateUrl:'app/modules/selling/views/products-add-step6.view.html'
		})
		//edit product
		.state('manage.editProduct',{
			url:'/editProduct',
			controller:'AddProduct',
			abstract : true,
			templateUrl:'app/modules/selling/views/products-add.view.html',
			resolve:{
				AttributeService: function(AttributeService){
					return AttributeService;
				},
				ProductService: function(ProductService){
					return ProductService;
				}
			},
			params:{
				title:'edit'
			}
		})
		.state('manage.editProduct.step1',{
			url:'/step1?pid',
			controller:'AddProductStep1',
			templateUrl:'app/modules/selling/views/products-add-step1.view.html'
		})
		.state('manage.editProduct.step2',{
			url:'/step2',
			controller:'AddProductStep2',
			templateUrl:'app/modules/selling/views/products-add-step2.view.html'
		})
		.state('manage.editProduct.step3',{
			url:'/step3',
			controller:'AddProductStep3',
			templateUrl:'app/modules/selling/views/products-add-step3.view.html'
		})
		.state('manage.editProduct.step4',{
			url:'/step4',
			controller:'AddProductStep4',
			templateUrl:'app/modules/selling/views/products-add-step4.view.html'
		})
		.state('manage.editProduct.step5',{
			url:'/step5',
			controller:'AddProductStep5',
			templateUrl:'app/modules/selling/views/products-add-step5.view.html'
		})
		.state('manage.editProduct.step6',{
			url:'/step6',
			controller:'AddProductStep6',
			templateUrl:'app/modules/selling/views/products-add-step6.view.html'
		})
	}
])