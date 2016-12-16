'use strict';

var applicationName = "funtown"

var mainModule = angular.module(applicationName,['mgcrea.ngStrap.typeahead','mgcrea.ngStrap.select','ui.router','manage','account','buying','selling']);
	
mainModule.config(['$locationProvider', '$urlRouterProvider', '$logProvider','$selectProvider',
	function($locationProvider,$urlRouterProvider,$logProvider,$selectProvider){
		$locationProvider.html5Mode(false);
		$urlRouterProvider.otherwise('/');
		$logProvider.debugEnabled(true);		

		angular.extend($selectProvider.defaults, {
		    placeholder:'',
		    placement:'auto'
		});
	}
]);


angular.element(document).ready(function(){
	angular.bootstrap(document,[applicationName]);
});