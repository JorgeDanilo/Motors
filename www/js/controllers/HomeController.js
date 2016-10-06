angular.module('starter.homeController', [])

.controller('HomeController', function($scope, $http, $ionicPopup) {

	$scope.send = function() {
		      
      $ionicPopup.show({
    
        template: "Fui clicado",
    
        buttons: [{
    
          text: 'OK'
    
        }]
    
      });
	}
})