describe('Setup com beforeEach e afterEach', function() {
  var a = 0;
  // executado antes de cada 'it'
  beforeEach(function() {
    a += 1;
  });
  // executado depois de cada 'it'
  afterEach(function() {
    a = 0;
  });

  it('Teste each 1', function() {
    expect(a).toEqual(1);
  });

  it('Teste each 2', function() {
    expect(a).toEqual(1);
  });
});


describe('Setup com beforeAll e afterAll', function() {
  var a = 0;
  // executa antes de todos os beforeEach e it
  beforeAll(function() {
    a = 5;
  });
  // executa depois de todos os afterEach it
  afterAll(function() {
    a = 0;
  });

  beforeEach(function() {
    a += 1;
  });

  afterEach(function() {
    a += 2;
  });

  it('Teste all 1', function() {
    // a = 0 + 5 (beforeAll) + 1 (beforeEah)
    expect(a).toEqual(6);
  });

  it('Teste all 2', function() {
    // a = 0 + 5 (beforeAll) + 1 (beforeEach) + 2 (afterEach) + 1 (beforeEach)
    expect(a).toEqual(9);
  });
});
