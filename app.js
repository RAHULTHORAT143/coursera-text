(function (){
'use strict';

angular.module("myFirstApp",[])

.controller("MyFirstAppController",function($scope){

						$scope.name="";

						$scope.totalValue=0;

						$scope.displayNumeric=function(){

							var totalNumericVal=calulateNumericValueForString($scope.name);
								console.log(totalNumericVal);
							$scope.totalValue=totalNumericVal;
						};

						function calulateNumericValueForString(string){

							var totalStringValue=0;
							for (var i = 0; i < string.length; i++) {
								totalStringValue += string.charCodeAt(i);
							}
							console.log(totalStringValue);
							return totalStringValue;

						}
						



				});



})();