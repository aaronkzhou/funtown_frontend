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
		.state('logout',{
			url:'/logout',
			controller:'LogoutController',
			data: {
				authRequired: false
            }
		})
		.state('register',{
			url:'/register',
			controller:'RegisterController',
			templateUrl:'app/modules/auth/views/register.view.html',
			data:{
				authrequired : false
			}
		}

		)
	}
])