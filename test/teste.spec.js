//Describe -> cria um novo bloco de teste
describe('BlocoTeste1', function() {
  var t;

  // beforeEach - executado antes de rotar cada teste 'it'
  beforeEach(function() {
    t = true;
  });

  // afterEach - executado após rotar o teste 'it'
  afterEach(function() {
    t = null;
  });

  // it - 'Ação 1' primeiro método de teste
  it('Acao 1', function() {
    expect(t).toBeTruthy();
  });

  // it - 'Ação 2' segundo método de teste
  it('Acao 2', function() {
    var valorEsperado = true;
    expect(t).toEqual(valorEsperado);
  });
});
