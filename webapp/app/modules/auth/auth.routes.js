'use strict';
angular.module('auth').config(['$stateProvider',
	function($stateProvider) {
		$stateProvider
		.state('login',{
			url:'/login',
			templateUrl:'app/modules/auth/views/login.view.html',
			controller:'LoginController',
			data: {
				authRequired: false
            }
		})
	}
])