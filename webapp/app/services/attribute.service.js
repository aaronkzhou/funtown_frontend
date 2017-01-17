'use strict';
angular.module('funtown').service('AttributeService', ['$log','$http', 
	function($log,$http){
		var attributes={};

		$log.debug("AttributeService");

		function init(){
			$log.debug("AttributeService::init");
			$http.get('/rest/api/attributes').then(function(response){
				var attributesList = response.data;
				attributesList.reduce(function(prev,next){
					if(prev.name !== next.name){												
						attributes[next.name] =[]
						attributes[next.name].push(next);
					}else{
						attributes[next.name].push(next);
					}
					return next;
				},{})

			})
		}

		//get attributes matching the name and includesMatch has the matchId or includesMatch is none
		this.getAttributesFor =  function(name,matchId){
			$log.debug("getAttributesFor - ",name,matchId)
			$log.debug(attributes);
			if(attributes[name]){
				return attributes[name].filter(function(attribute){
					return (attribute.includeMatches==='None' || attribute.includeMatches.indexOf(matchId) > -1); 
				});
			}else{
				$log.warn("No arributes found for name = " ,name);
			}			
		}

		this.getAttributes = function(){
			return attributes;
		}

		init();
	}
])