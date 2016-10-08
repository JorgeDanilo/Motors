function getVeiculos() {
	this.itens = [];

	var lista = localStorage.getItem("veiculos");


	if (lista !== null) {
		this.itens = angular.fromJson(lista);
	}
		

	this.save = function() {
		var lista = angular.toJson(this.itens);
		localStorage.setItem("veiculos", lista);
	}

	this.remove = function(item) {
		var pos = this.itens.indexOf(item);
		this.itens.splice(pos, 1);
	};

	this.add = function(item) {
		this.itens.push(item);
	};
}