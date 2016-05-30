var app = angular.module('app.teste');
app.controller('RotaController', rotaController);
app.factory('ServicoEquipamento', servicoItem);

rotaController.$inject = ['$location', 'ServicoEquipamento'];

function rotaController($location, ServicoEquipamento) {
  var vm = this;
  vm.equips = ServicoEquipamento.listaEquipamentos();
  vm.acessarEquipamento = function() {
    $location.path('/equipamento');
  };

  vm.acessarOS = function() {
    $location.path('/os');
  };
};

function servicoItem() {
  var equipamentos = [
    { id: 1, descricao: 'disjuntor 001' },
    { id: 2, descricao: 'disjuntor 002' },
  ];

  return {
    listaEquipamentos: function() {
      return equipamentos;
    }
  };
  // },
  // adicionar = function(novoEquipamento) {
  //   equipamentos.push(novoEquipamento);
  // }
};
