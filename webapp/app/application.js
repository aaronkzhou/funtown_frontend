'use strict';

var applicationName = "funtown"

var mainModule = angular.module(applicationName,['mgcrea.ngStrap.typeahead','mgcrea.ngStrap.alert','mgcrea.ngStrap.select','ui.router','ngMessages','ngSanitize','flow',
	'manage','account','buying','selling']);
	
mainModule.config(['$locationProvider', '$urlRouterProvider', '$logProvider','$selectProvider','flowFactoryProvider',
	function($locationProvider,$urlRouterProvider,$logProvider,$selectProvider,flowFactoryProvider){
		$locationProvider.html5Mode(false);
		$urlRouterProvider.otherwise('/');
		$logProvider.debugEnabled(true);		

		angular.extend($selectProvider.defaults, {
		    placeholder:'',
		    placement:'auto'
		});

		flowFactoryProvider.defaults = {
	        target: '/rest/api/upload',
	        permanentErrors:[404, 500, 501],
	        simultaneousUploads: 3,
	        testChunks:false
	    };

	}
]);


angular.element(document).ready(function(){
	angular.bootstrap(document,[applicationName]);
});