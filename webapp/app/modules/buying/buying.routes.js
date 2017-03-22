'use strict';
angular.module('buying').config(['$stateProvider',
	function($stateProvider) {
		$stateProvider
		.state('buy',{
			url:'/buy',
			templateUrl:'app/modules/buying/views/buy.view.html',
			data: {
				authRequired: true
            }
		})
		.state('buy.funtownVideo',{
			url:'/funtownVideo',
			templateUrl:'app/modules/buying/views/funtownVideo.view.html',
			data: {
				authRequired: true
            }
		})

	}
])
