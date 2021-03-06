var app = angular.module('instangular', ['controllers', 'ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'templates/main.html',
		controller: 'MainCtrl'
	})
	.when('/favorites', {
		templateUrl: 'templates/favorites.html',
		controller: 'FavoritesCtrl'
	});

	// use the HTML5 History API
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}]);