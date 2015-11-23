// NOTE: This was based heavily on Prof. Auman's work on Comic Vines
angular.module('search.controller', [])
	.directive("showPreview", function(){
		return{

			scope: true,
			templateUrl: "../views/show.preview.html",
			// controller: 'SearchController'
		}
	})

	.controller('SearchController', function ($scope, SearchService) {
		$scope.search = function(){
			SearchService.query({name: $scope.name}, function(response){
				$scope.shows = response;
			})
		};
});
