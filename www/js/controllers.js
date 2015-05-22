angular.module('qrscanner.controllers', ['ionic', 'ngCordova'])

.controller('HomeController', [
	'$scope',
	'$cordovaBarcodeScanner',
	'$cordovaInAppBrowser',
	function($scope, $cordovaBarcodeScanner, $cordovaInAppBrowser) {
		$scope.activateScanner = function() {
			$cordovaBarcodeScanner

			.scan()
				.then(function(result) {
					var options = {
				      location: 'no',
				      clearcache: 'yes',
				      toolbar: 'no'
				    };

					$cordovaInAppBrowser.open('http://54.186.44.11:43000/', '_blank', options);
				}, function(error) {
					alert("Error: " + error);
				});
		}
	}
]);