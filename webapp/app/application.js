'use strict';

var applicationName = "funtown"


var mainModule = angular.module(applicationName,['mgcrea.ngStrap.tab','ui.router','manage','account','buying','selling']);

	
mainModule.config(['$locationProvider', '$urlRouterProvider', '$logProvider','$provide',
	function($locationProvider,$urlRouterProvider,$logProvider,$provide){
		$locationProvider.html5Mode(false);
		$urlRouterProvider.otherwise('/');
		$logProvider.debugEnabled(true);		
	}
]);


angular.element(document).ready(function(){
	angular.bootstrap(document,[applicationName]);
});


if (!String.prototype.supplant) {
  String.prototype.supplant = function (o) {
    return this.replace(/\{([^{}]*)\}/g,
    function (a, b) {
      var r = o[b];
      return typeof r === 'string' || typeof r === 'number' ? r : a;
    });
  };
}