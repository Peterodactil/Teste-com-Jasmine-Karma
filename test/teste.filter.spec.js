describe('Testando Filtro Bool to String', function() {
    beforeEach(module('app.teste'));

    var filtro;

    beforeEach(inject(function(boolToStringFilter) {
      filtro = boolToStringFilter;
    }));

    it('true para Sim', function() {
      var resultado = filtro(true);
      expect(resultado).toEqual('Sim');
    });

    it('false para Não', function() {
      var resultado = filtro(false);
      expect(resultado).toEqual('Não');
    });
});

describe('Testando Filtro Tempo Atrás', function() {
    beforeEach(module('app.teste'));

    var filtro;

    beforeEach(inject(function(tempoAtrasFilter) {
      filtro = tempoAtrasFilter;
    }));

    it('Tratar todos os resultados', function() {
      var dataAgora = new Date().getTime();

      dataAgora -= 10000;
      expect(filtro(dataAgora)).toEqual('segundos atrás');

      var minutosAtras = dataAgora - 1000 * 60;
      expect(filtro(minutosAtras)).toEqual('minutos atrás');

      var horasAtras = dataAgora - 1000 * 60 * 68;
      expect(filtro(horasAtras)).toEqual('horas atrás');

      var diasAtras = dataAgora - 1000 * 60 * 68 * 26;
      expect(filtro(diasAtras)).toEqual('dias atrás');

      var mesesAtras = dataAgora - 1000 * 60 * 68 * 26 * 32;
      expect(filtro(mesesAtras)).toEqual('meses atrás');
    });
});
