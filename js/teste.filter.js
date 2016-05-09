var app = angular.module('app.teste');
app.filter('tempoAtras', tempoAtras);
app.filter('boolToString', boolToString);

function tempoAtras() {
  var UM_MINUTO = 1000 * 60;
  var UMA_HORA = UM_MINUTO * 60;
  var UM_DIA = UMA_HORA * 24;
  var UM_MES = UM_DIA * 30;

  return function(data) {
    var dataAtual = new Date().getTime();
    var diferenca = dataAtual - data;

    if (diferenca < UM_MINUTO) {
      return 'segundos atrás';
    } else if (diferenca < UMA_HORA) {
      return 'minutos atrás';
    } else if (diferenca < UM_DIA) {
      return 'horas atrás';
    } else if (diferenca < UM_MES) {
      return 'dias atrás';
    } else {
      return 'meses atrás';
    }
  }
};

function boolToString() {
  return function(valorBool) {
    if (valorBool) return 'Sim';
    else return 'Não';
  };
};
