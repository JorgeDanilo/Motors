// Ionic Starter App

var db = null;

var app = angular.module('starter', ['ionic', 'starter.routes', 'starter.homeController','starter.modalService', 'ngStorage', 'ngCordova'])

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

app.controller('ListaAbastecimentoController', function($scope, $ionicModal, $localStorage, $ionicPopup, ModalService) {

	$scope.modal = {};

	$localStorage.dadosVeiculos = [];	

	var veiculo = new getVeiculos();

	$scope.lista = veiculo.itens;

	$scope.veiculo = {
	
		modelo : "",
	
		marca : "",
	
		tipo : "",

		valorLitro : ""
	};

		$scope.abrirTelaCadastroVeiculo = function() {
	
			ModalService
	
				.init('templates/cadastroVeiculoModal.html', $scope)
	
				.then(function(modal) {
	
					modal.show();
	
			});
		};


	$scope.cadastrarVeiculo = function() {		

		var item = {marca : "", modelo : "", tipo : "", data : "", valor : "", valorLitro :  ""};		

		$scope.lista = veiculo.itens;

		item.marca = $scope.veiculo.marca;

		item.modelo = $scope.veiculo.modelo;

		item.tipo = $scope.veiculo.tipo;

		item.data = new Date();

		item.valor = $scope.veiculo.valor;

		item.valorLitro = $scope.veiculo.valorLitro;

		if ($scope.veiculo !== "") {

			console.log(item);

			veiculo.add(item);

			 var alertPopup = $ionicPopup.alert({
		     
		     template: '<center>Veículo cadastrado com sucesso!</center>'
		   });

		   alertPopup.then(function(res) {

		   	$scope.modal.hide();
		     
		   });


		}

		veiculo.save();

		delete $scope.item;

	}


	$scope.removerAbastecimentosVeiculos = function(item) {

		var confirmPopup = $ionicPopup.confirm({
     	
	     	title: 'Informação',
	     	
	     	template: 'Deseja excluir o abastecimento ?'

   		});

   		confirmPopup.then(function(res) {
	     
	     if(res) {
	       
	       veiculo.remove(item);

			veiculo.save();

	     } else {
	       
	    }

	   });		
	}
});

