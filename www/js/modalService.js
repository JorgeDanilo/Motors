angular.module('starter.modalService', [])
.service('ModalService', function($ionicModal, $rootScope) {

	var init = function(tpl , $scope) {

		var promisse;
		$scope = $scope || $rootScope.$new();

		promisse = $ionicModal.fromTemplateUrl(tpl, {
			scope : $scope,
			animation : 'slide-in-up'
		}).then(function(modal) {
			$scope.modal = modal;
			return modal;
		});

		$scope.openModal = function() {
			$scope.modal.show();
		};
		$scope.closeModalService = function() {
			$scope.modal.hide();
		};
		$scope.$on('$destroy', function() {
			//$scope.modal.remove();
		});

		return promisse;
	}

	return {
		init : init
	}
})