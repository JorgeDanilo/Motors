// Ionic Starter App

var db = null;

var app = angular.module('starter', ['ionic', 'starter.routes', 'starter.homeController', 'ngStorage', 'ngCordova'])

.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.controller('ListaAbastecimentoController', function($scope, $ionicModal, $localStorage) {

	$scope.modal = {};

	$localStorage.dadosVeiculos = [];


	$scope.veiculo = {
		modelo : "",
		marca : "",
		tipo : ""
	};

	$scope.abrirTelaCadastroVeiculo = function() {
		
		$ionicModal.fromTemplateUrl('templates/cadastroVeiculoModal.html', {

			scope : $scope,

			animation : 'slide-in-up'

		}).then(function(modal) {

			$scope.modal = modal;

			$scope.modal.show();

		})

	}


	$scope.cadastrarVeiculo = function() {

		console.log($scope.veiculo);

		if ($scope.veiculo !== "") {

			$localStorage.dadosVeiculos.push($scope.veiculo);


		}

	}

});

