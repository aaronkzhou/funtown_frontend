angular.module('selling').controller('ProductsView', ['$scope', 
	function($scope){
		var productsViewCtrl = this;

		$scope.tabs = [
			{
				title:'Selling',
				state: 'manage.products.selling'
			},
			{
				title:'Sold',
				state: 'manage.products.sold'
			},
			{
				title:'Out Of Stock',
				state: 'manage.products.outOfStock'
			},
			{
				title:'De-Active',
				state: 'manage.products.deactive'
			},
			{
				title:'In-Draft',
				state: 'manage.products.inDraft'
			}
		]
	}
])