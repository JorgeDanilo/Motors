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

app.controller('ListaAbastecimentoController', function($scope, $ionicModal, $localStorage, $ionicPopup) {

	$scope.modal = {};

	$localStorage.dadosVeiculos = [];	

	var veiculo = new getVeiculos();

	$scope.lista = veiculo.itens;

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

		var item = {marca : "", modelo : "", tipo : "", data : ""};		

		$scope.lista = veiculo.itens;

		item.marca = $scope.veiculo.marca;

		item.modelo = $scope.veiculo.modelo;

		item.tipo = $scope.veiculo.tipo;

		item.data = new Date();

		if ($scope.veiculo !== "") {

			console.log(item);

			veiculo.add(item);

			 var alertPopup = $ionicPopup.alert({
		     
		     template: 'Veículo cadastrado com sucesso!'
		   });

		   alertPopup.then(function(res) {

		   	$scope.modal.hide();
		     
		   });


		}

		veiculo.save();

		delete $scope.item;

	}

});

