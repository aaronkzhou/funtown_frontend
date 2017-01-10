'use strict';
angular.module('funtown').service('ShippingTempalateService', ['$log','$http',
	function($log,$http){
		$log.debug('ShippingTempalateService');

		this.getShippingTemplates = function(){
			$log.debug('ShippingService1');
			return $http.get('/rest/api/selling/templates').then(function(response){
				return response.data;
			});
		}

		this.postTemplate = function(newTemplate){
			$log.debug('addTemplate', newTemplate);
			return $http.post('/rest/api/selling/templates', newTemplate).then(function(response){
				$log.debug('response.data',response.data);
				return response.data;
			});
		}

		this.deleteTemplate = function(templateId){
			$log.debug('delete',templateId);
			$http.delete('/rest/api/selling/templates/' + templateId)
		}

		this.saveEditTemplate = function(modifiedTemplate){
			$log.debug('put',modifiedTemplate);
			return $http.put('/rest/api/selling/templates', modifiedTemplate).then(function(response){
				return response.data;
			});
		}
	}
])