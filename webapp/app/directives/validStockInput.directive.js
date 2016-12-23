angular.module('funtown').directive('validStock', [function(){
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attr, ctrl) {
			function customValidator(ngModelValue) {
				console.log("customValidator",ngModelValue)
				if(ngModelValue && ngModelValue.length > 0){
					ctrl.$setValidity('stockRequired', false);
				}else{
					ctrl.$setValidity('stockRequired', true);
				}
				return ngModelValue;
			}
			ctrl.$parsers.push(customValidator);	
		}
	};
}]);