/*!
 * angular-wait - Angular service for wait
 * v0.1.0
 * https://github.com/firstandthird/angular-wait
 * copyright First + Third 2013
 * MIT License
*/
angular.module('ftWait',[]).factory('wait',["$window",function($window){
  var wait = $window.wait.noConflict();

  return {
    show : wait.show,
    hide : wait.hide
  };
}]);