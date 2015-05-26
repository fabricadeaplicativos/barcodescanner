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


				    alert('go to ' + JSON.stringify(result.text));

					$cordovaInAppBrowser.open(result.text, '_blank', options);
				}, function(error) {
					alert("Error: " + error);
				});
		}
	}
]);