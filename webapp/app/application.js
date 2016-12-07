'use strict';

var applicationName = "funtown"


var mainModule = angular.module(applicationName,['mgcrea.ngStrap.tab','ui.router','manage','account','buying','selling']);

mainModule.config(['$locationProvider', '$urlRouterProvider',
	function($locationProvider,$urlRouterProvider){
		$locationProvider.html5Mode(false);
		$urlRouterProvider.otherwise('/');
	}
]);


angular.element(document).ready(function(){
	angular.bootstrap(document,[applicationName]);
});