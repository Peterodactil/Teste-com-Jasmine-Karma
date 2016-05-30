describe('Testando serviço rota', function() {
    beforeEach(module('app.teste'));

    var ctrl;
    var loc;
    beforeEach(inject(function($controller, $location) {
      ctrl = $controller('RotaController');
      loc = $location;
    }));

    it('Acessar rota equipamento', function() {
      //console.log(loc.$$path);
      expect(loc.$$path).toEqual('');
      ctrl.acessarEquipamento();
      //console.log(loc.$$path);
      expect(loc.$$path).toEqual('/equipamento');
      ctrl.acessarOS();
      //console.log(loc.$$path);
      expect(loc.$$path).toEqual('/os');
    });
});

describe('Testando serviço lista equipamentos', function () {
  beforeEach(module('app.teste'));

  var ctrl;
  var mockServico;

  beforeEach(module(function($provide) {
    mockServico = {
      listaEquipamentos: function() {
        return [{ id: 1, descricao: 'transmissor 001'}];
      }
    };
    $provide.value('ServicoEquipamento', mockServico);
  }));

  beforeEach(inject(function($controller) {
    ctrl = $controller('RotaController');
  }));

  it('Testar servico', function() {
    console.log(ctrl.equips);
    expect(ctrl.equips).toEqual([{ id: 1, descricao: 'transmissor 001'}]);
  });
});
