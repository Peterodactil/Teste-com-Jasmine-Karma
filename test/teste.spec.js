//Describe -> cria um novo bloco de teste
describe('BlocoTeste', function() {
  var t;

  // beforeEach - executado antes de rotar cada teste 'it'
  beforeEach(function() {
    // console.log('Executa antes de inicar o teste');
    t = true;
  });

  // afterEach - executado após rotar o teste 'it'
  afterEach(function() {
    // console.log('Executa depois de finalizar o teste');
    t = false;
  });

  // it - 'Ação 1' primeiro método de teste
  it('Teste 1', function() {
    // console.log('Rodando teste 1');
    expect(t).toBeTruthy();
  });

  // it - 'Ação 2' segundo método de teste
  it('Teste 2', function() {
    // console.log('Rodando teste 2');
    var valorEsperado = true;
    expect(t).toEqual(valorEsperado);
  });
});
