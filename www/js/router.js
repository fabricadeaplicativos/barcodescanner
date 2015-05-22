angular.module('qrscanner.router', [
	'ionic',
	'qrscanner.controllers'
])

.config([
	'$stateProvider', 
	'$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider) {
		$stateProvider

		.state('home', {
			url: '/home',
			controller: 'HomeController',
			templateUrl: 'templates/home.html'
		});
	}
]);