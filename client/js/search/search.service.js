//NOTE: This was based heavily on Prof. Auman's work on Comic Vines
angular.module('search.service', [])
	.factory('SearchService', function ($resource) {
		return $resource("search/shows");
	});
