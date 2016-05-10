var app = angular.module('app.teste');
app.controller('rotaController', rotaController);

rotaController.$inject = ['$location'];

function rotaController($location) {
  var vm = this;

  vm.acessarEquipamento = function() {
    $location.path('/equipamento');
  };

  vm.acessarOS = function() {
    $location.path('/os');
  };
};
