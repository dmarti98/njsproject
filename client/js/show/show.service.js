// NOTE: This was based heavily on Prof. Auman's work on Comic Vines
angular.module("show.service", [])
  .factory("ShowService", function($resource){
    return $resource("/search/shows");
  });
