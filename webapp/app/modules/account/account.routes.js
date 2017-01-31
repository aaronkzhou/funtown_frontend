'use strict';
angular.module('account').config(['$stateProvider',
	function($stateProvider){
		$stateProvider
			.state('account',{
				url:'/account',
				templateUrl:'app/modules/account/views/account.view.html',
				data: {
					authRequired: true
	            }
			})
			
	}
])