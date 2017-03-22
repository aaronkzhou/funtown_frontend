angular.module('auth').service('AuthService', ['$http','$log',
	function($http,$log){
		
		var user = null;
		var forwardPath = "buy";

		this.setSessionUser = function(){
			$log.debug("setSessionUser");
			return $http.get('/rest/api/user').then(function(response){				
				user = response.data;
				$log.debug("sessionUser",user);
			},function(){
				user = null;
			});	
		}

		this.authenticate = function(credentials){
			$log.debug("authenticate",credentials);
			var headers = credentials ? { authorization : "Basic " + btoa(credentials.username + ":" + credentials.password)} : {};
			return $http.get('/rest/api/authenticate', {headers : headers}).then(function(response){				
				user = response.data;
				$log.debug("user",response);
			});			
		}

		this.logout = function(){
			user = null;
			return $http.post('/rest/api/logout');
		}

		this.isAuthenticated = function(toState){
			forwardPath = toState ? toState.name : forwardPath;
			return user ? true : false;
		}

		this.getForwardPath = function(){
			return forwardPath;
		}

		this.getUserName = function(){
			return user.username;
		}
		this.getIfEmailExist = function(email){
			//return $http.post('/rest/api/'+email);
			return true;
		}
		this.getIfUserNameExist = function(username){
			return true;
		}
	}
])