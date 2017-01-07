'use strict';
angular.module('funtown').directive('numberInput', [function(){
	return {
		restrict: 'A',
		link: function(scope, element, attr) {			
            var invalidInputs = [101,69,45]; // 101 = e , 69 = E , 45 = -
            if(attr.integersOnly){
            	invalidInputs.push(46); // 46 = .
            }
            
           	element.bind('keypress', function (e) {
                var code = e.keyCode || e.which;                

                if (invalidInputs.indexOf(code)>-1) {
                    e.preventDefault();
                }
            });
		}
	};
}]);