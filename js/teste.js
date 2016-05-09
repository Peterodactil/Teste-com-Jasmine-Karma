var app = angular.module('app', []);
app.controller('TesteController', TesteController);

function TesteController() {
    var vm = this;
    vm.Soma = function(valor1, valor2) {
        return valor1 + valor2;
    }
};
