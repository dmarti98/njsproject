// NOTE: Homework was heavily based on Prof. Auman's work

angular.module('app', ['ngRoute', 'ngResource', 'search.controller', 'search.service',
  "show.controller", "show.service"])
  .filter("trustHTML", function($sce){
    return function(text){
      return $sce.trustAsHtml(text);
    }
  })
  .config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
      //sets ng-view to the search.html with its respective controller
      $routeProvider
        .when('/', {
          templateUrl: 'views/search.html',
          controller: 'SearchController'
        })
        .otherwise({
          redirectTo: '/'
        });

      $locationProvider.html5Mode(true);
  }]);
