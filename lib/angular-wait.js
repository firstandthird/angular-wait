angular.module('ftWait',[]).factory('wait',["$window",function($window){
  var wait = $window.wait.noConflict();

  return {
    show : wait.show,
    hide : wait.hide
  };
}]);