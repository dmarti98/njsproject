// NOTE: This was based heavily on Prof. Auman's work on Comic Vines
angular.module("show.controller", [])
  .controller("ShowController", function($scope, show){
    $scope.show = show;
  });
