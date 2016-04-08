//Describe -> cria um novo bloco de teste
describe('BlocoTeste1', function() {
  var t;

  // Semelhante a setup
  // beforeEach - executado antes de rotar cada teste 'it'
  beforeEach(function() {
    console.log('beforeEach');
    t = true;
  });

  // afterEach - executado após rotar o teste 'it'
  afterEach(function() {
    console.log('afterEach');
    t = null;
  });

  // it - 'Ação 1' primeiro método de teste
  it('Acao 1', function() {
    console.log('it - Acao 1');
    expect(t).toBeTruthy();
  });

  // it - 'Ação 2' segundo método de teste
  it('Acao 2', function() {
    console.log('it - Acao 2');
    var valorEsperado = true;
    expect(t).toEqual(valorEsperado);
  });
});
