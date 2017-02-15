'use strict';
angular.module('auth').controller('RegisterController', ['$log','$scope', 'AuthService','$state','AlertsService','$http',
	function($log,$scope,AuthService,$state,AlertsService,$http){
		$log.debug("RegisterController");
		var new_res;
		var address_selected;
		var params = {};
		var city_postcode;
		function init(){
			$log.debug("Register::init");
			$scope.register = {};
			$scope.email = "";
			$scope.username = "";
			$scope.password = "";
			$scope.confirm_password = "";
			$scope.selectedAddress = "";
			$scope.postcode = "";
			$scope.surburb = "";
			$scope.city = "";
			$scope.address = "";
		}
		$scope.authenticate = function(){				
			$log.debug("register");
			AuthService.getIfEmailExist($scope.email).then(function(){
					$scope.email_exist = false;
				},function(err){
					$scope.email_exist = true;
					//$scope.error = err.data.message;
			});
			AuthService.getIfUserNameExist($scope.username).then(function(){
					$scope.username_exist = false;
				},function(err){
					$scope.username_exist = true;
					//$scope.error = err.data.message;
			});

		}
		$scope.getAddress = function(viewValue) {
		    params = {
		    	address: viewValue, 
		    	sensor: false,
		    	language: 'en'
		    };
		    delete $http.defaults.headers.common["X-Requested-With"];
		    return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: params})
		    .then(function(res){
		    	address_selected = res.data.results.filter(function(item){
		    		return item.formatted_address.indexOf('New Zealand') !== -1;
		    	});
		    	return address_selected;
		    });
		};
		$scope.populateAddress = function(){
			new_res = $scope.selectedAddress.split(',');
			city_postcode = new_res[2].trim().split(' ');
			$scope.address = new_res[0].trim();
			$scope.surburb = new_res[1].trim();
			$scope.city = city_postcode[0].trim();
			$scope.postcode = city_postcode[1].trim();
		}

		init();	
	}
])