describe('Testando serviço rota', function() {
    beforeEach(module('app.teste'));

    var ctrl;
    var $loc;
    beforeEach(inject(function($controller, $location) {
      ctrl = $controller('rotaController');
      $loc = $location;
    }));

    it('Acessar rota equipamento', function() {
      //console.log($loc.$$path);
      expect($loc.$$path).toEqual('');
      ctrl.acessarEquipamento();
      //console.log($loc.$$path);
      expect($loc.$$path).toEqual('/equipamento');
      ctrl.acessarOS();
      //console.log($loc.$$path);
      expect($loc.$$path).toEqual('/os');
    });
});
