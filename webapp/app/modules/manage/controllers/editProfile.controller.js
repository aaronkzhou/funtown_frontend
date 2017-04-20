'use strict';
angular.module('manage').controller('editProfileController', ['$log','$scope', 'AuthService','$state','AlertsService','$http',
	function($log,$scope,AuthService,$state,AlertsService,$http){
		$log.debug("editProfileController");
		var new_res;
		var address_selected;
		var placeSearch, autocomplete,googleAPIaddress;
		var params = {};
		var city_postcode;
    function init(){
      $log.debug("editProfile::init");
      $scope.editProfile = {};
      $scope.editProfile.fullname = "Kedar Krishnan";
      $scope.editProfile.genderOptions = "male";
			$scope.editProfile.LandlineAreaCode = getLandlineAreaCode();
			$scope.editProfile.PhoneAreaCode = getPhoneAreaCode();
			$scope.editProfile.LandlineCode = "";
			$scope.editProfile.phoneCode = "021";
			$scope.editProfile.PhoneCode = "4315111";
			$scope.editProfile.selectedAddress = "";
			$scope.editProfile.additionalAddress = "";
			$scope.editProfile.address = "";
			$scope.editProfile.surburb = "";
			$scope.editProfile.city = "";
			$scope.editProfile.postcode = "";



			initAutocomplete();
    }
		$scope.authenticate = function(){
			$log.debug("editProfile:authenticate");
			$scope.editProfile.authenticated = true;
		}

		$scope.canNotFindYourAddress = function(){
			$scope.editProfile.getFromGoogleApi = false;
			$scope.editProfile.selectedAddress = "";
			$scope.editProfile.postcode = "";
			$scope.editProfile.surburb = "";
			$scope.editProfile.city = "";
			$scope.editProfile.address = "";
		}


		function populateAddress(){
			googleAPIaddress = autocomplete.getPlace().address_components;
			$scope.editProfile.address = googleAPIaddress[0].long_name + ' ' + googleAPIaddress[1].long_name;
			$scope.editProfile.surburb = googleAPIaddress[2].long_name;
			$scope.editProfile.city = googleAPIaddress[4].long_name;
			$scope.editProfile.postcode = googleAPIaddress[6].long_name;
			$scope.editProfile.getFromGoogleApi = true;
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

    init();

  }
])
