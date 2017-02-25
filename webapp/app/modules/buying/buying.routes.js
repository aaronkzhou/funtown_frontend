'use strict';
angular.module('buying').config(['$stateProvider',
	function($stateProvider) {
		$stateProvider
		.state('buy',{
			url:'/',
			templateUrl:'app/modules/buying/views/buy.view.html',
			data: {
				authRequired: false
            }
		})
	}
])