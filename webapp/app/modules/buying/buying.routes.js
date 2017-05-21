'use strict';
angular.module('buying').config(['$stateProvider',
	function($stateProvider) {
		$stateProvider
		// .state('buy',{
		// 	url:'/buy',
		// 	templateUrl:'app/modules/buying/views/buy.view.html',
		// 	data: {
		// 		authRequired: true
    //         }
		// })
		.state('buy',{
			url:'/searchResult',
			controller:'searchResultController',
			templateUrl:'app/modules/buying/views/searchResult.view.html',
			data: {
				authRequired: true
            }
		})
	}
])
