var app = angular.module('app.teste', []);
app.controller('TesteController', TesteController);

function TesteController() {
    var vm = this;

    vm.SomaComValores = function() {
        return vm.primeiro + vm.segundo;
    }

    vm.Soma = function(valor1, valor2) {
        return valor1 + valor2;
    }
};
