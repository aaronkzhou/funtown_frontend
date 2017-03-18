'use strict';
angular.module('auth').controller('RegisterController', ['$log','$scope', 'AuthService','$state','AlertsService','$http',
	function($log,$scope,AuthService,$state,AlertsService,$http){
		$log.debug("RegisterController");
		var new_res;
		var address_selected;
		var placeSearch, autocomplete,googleAPIaddress;
		var params = {};
		var city_postcode;
		function init(){
			$log.debug("Register::init");
			$scope.userRegister = {};
			$scope.userRegister.email = "";
			$scope.userRegister.username = "";
			$scope.userRegister.password = "";
			$scope.userRegister.fullName = "";
			$scope.userRegister.confirm_password = "";
			$scope.userRegister.selectedAddress = "";
			$scope.userRegister.postcode = "";
			$scope.userRegister.surburb = "";
			$scope.userRegister.city = "";
			$scope.userRegister.address = "";
			$scope.userRegister.additionalAddress = "";
			$scope.userRegister.authenticated = false;
			$scope.userRegister.genderOptions = "";
			$scope.userRegister.LandlineAreaCode = getLandlineAreaCode();
			$scope.userRegister.PhoneAreaCode = getPhoneAreaCode();
			$scope.userRegister.PhoneCode = "";
			$scope.userRegister.LandlineCode = "";
			$scope.userRegister.TnCCheckbox = false;
			$scope.userRegister.monthsFunc = getMonths();
			$scope.userRegister.months= "";
			$scope.userRegister.daysFunc = getDays();
			$scope.userRegister.days= "";

			initAutocomplete();
		}
		$scope.authenticate = function(){
			$log.debug("register:authenticate");
			$scope.userRegister.authenticated = true;
			AuthService.getIfEmailExist($scope.userRegister.email);
			AuthService.getIfUserNameExist($scope.userRegister.username);
		}
		$scope.canNotFindYourAddress = function(){
			$scope.userRegister.getFromGoogleApi = false;
			$scope.userRegister.selectedAddress = "";
			$scope.userRegister.postcode = "";
			$scope.userRegister.surburb = "";
			$scope.userRegister.city = "";
			$scope.userRegister.address = "";
			$scope.userRegister.myDate = "";
		}
		// $scope.getAddress = function(viewValue) {
		//     params = {
		//     	address: viewValue,
		//     	sensor: false,
		//     	language: 'en'
		//     };
		//     delete $http.defaults.headers.common["X-Requested-With"];
		//     return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: params})
		//     .then(function(res){
		//     	address_selected = res.data.results.filter(function(item){
		//     		return item.formatted_address.indexOf('New Zealand') !== -1;
		//     	});
		//     	return address_selected;
		//     });
		// };
		function populateAddress(){
			googleAPIaddress = autocomplete.getPlace().address_components;
			$scope.userRegister.address = googleAPIaddress[0].long_name + ' ' + googleAPIaddress[1].long_name;
			$scope.userRegister.surburb = googleAPIaddress[2].long_name;
			$scope.userRegister.city = googleAPIaddress[4].long_name;
			$scope.userRegister.postcode = googleAPIaddress[6].long_name;
			$scope.userRegister.getFromGoogleApi = true;
			$scope.$apply();
		}

		function initAutocomplete(){

		  autocomplete = new google.maps.places.Autocomplete(
		      /** @type {!HTMLInputElement} */(document.getElementById('addressAutoComplete')),
		      {
		      	types: ['address'],
		      	componentRestrictions: {country: 'NZ'},
		      }
		  );

		  // When the user selects an address from the dropdown, populate the address
		  // fields in the form.
		  autocomplete.addListener('place_changed', populateAddress);
		}
		function getLandlineAreaCode(){
			return ['03','04','06','07','09','+61'];
		}
		function getPhoneAreaCode(){
			return ['020','021','022','027','028','029'];
		}
		function getMonths(){
			return ["January","Febrary","March","April","May","June","July","August","September","October","November","December"]
		}
		function getDays(){
			return ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]
		}

		init();
	}
])
