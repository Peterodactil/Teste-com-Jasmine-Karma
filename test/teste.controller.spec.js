describe('TesteControllerSpec', function() {
    // carrega o modulo 'app'
    beforeEach(module('app.teste'));

    var ctrl;
    var ctrlComValores;

    // carrega o controller 'TesteController' do modulo 'app' e guarda em ctrl
    beforeEach(inject(function($controller) {
      ctrl = $controller('TesteController');
      
      ctrlComValores = $controller('TesteController', {}, { primeiro: 2, segundo: 4 });
    }));

    // testando a função 'Soma' do controller 'TesteController'
    it('Teste Soma', function() {
      var resultado = ctrl.Soma(1, 1);
      expect(resultado).toEqual(2);
    });

    it('Teste Soma Com Valores', function() {
      var resultado = ctrlComValores.SomaComValores();
      expect(resultado).toEqual(6);
    });
});
