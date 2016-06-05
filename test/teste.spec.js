// describe -> cria o conjunto de teste
describe('Conjunto do teste', function() {
  // it -> especificação do teste
  it('Especificação do teste', function() {
    // expect -> espectativa/resultado esperado do teste
    expect(true).toBe(true);
  });
});


describe('Testando variável', function() {
  var a;

  it('a === true?', function() {
    a = true;
    expect(a).toBe(true);
  });
});


describe('Teste com mais de uma especificação', function() {
  it('Resultado esperado => true', function() {
    expect(true).toBe(true);
  });

  it('Resultado esperado => false', function() {
    expect(false).not.toBe(true);
  });
});


describe('Multiplos conjunto de teste', function() {
  it('Teste 1', function() {
    expect(true).toBe(true);
  });

  describe('Sub-conjunto de teste', function() {
    it('Teste 2', function() {
      expect(false).toBe(false);
    });
  });
});


describe('Conjunto de teste com mais de um resultado esperado', function() {
  it('Teste 1', function() {
    expect(true).toBe(true);
    expect(true).not.toBe(false);
  });
});


describe('Teste toEqual vs toBe', function() {
  var foo = { a: 13 };
  var bar = { a: 13 };

  it('Valor é igual? toEqual', function() {
    expect(foo).toEqual(bar);
  });

  it('Valor não é igual? toBe', function() {
    expect(foo).not.toBe(bar);
  });
});


describe('Verificando resultado com expressão regular', function() {
  var mensagem = "Campo descrição é obrigatório.";

  it('Mensagem de erro possui descrição "obrigatório"?', function() {
    expect(mensagem).toMatch(/obrigatório/);
  });

  it('Mensagem de erro possui descrição "obrigatório"?', function() {
    expect(mensagem).toMatch("obrigatório");
  });

  it('Mensagem de erro não possui descrição "erro"?', function() {
    expect(mensagem).not.toMatch(/erro/);
  });
});


describe('Testando variável definida', function() {
  var a = {
    foo: "foo"
  };

  it('Esta definida - toBeDefined()', function() {
    expect(a.foo).toBeDefined();
  });

  it('Esta não definida - toBeDefined()', function() {
    expect(a.bar).not.toBeDefined();
  });

  it('Esta definida - toBeUndefined()', function() {
    expect(a.foo).not.toBeUndefined();
  });

  it('Esta não definida - toBeUndefined()', function() {
    expect(a.bar).toBeUndefined();
  });

  it('Esta não definida - toBe(undefined)', function() {
    expect(a.bar).toBe(undefined);
  });
});


describe('Testando variável nula', function() {
  var a = null;
  var foo = "foo";

  it('Variável "a" é nula?', function() {
    expect(a).toBeNull();
  });

  it('Variável "foo" não é nula? toBeNull()', function() {
    expect(foo).not.toBeNull();
  });

  it('Variável "foo" não é nula? toBe(null)', function() {
    expect(foo).not.toBe(null);
  });
});


describe('Verificar valor após convertido para boolean', function() {
  var a, b = "foo";

  it('É verdadeiro', function() {
    expect(b).toBeTruthy();
    expect(b).not.toBeFalsy();
  });

  it('É falso', function() {
    expect(a).not.toBeTruthy();
    expect(a).toBeFalsy();
  });
});


describe('Testar se o resultado contém determinado valor - para arrays', function() {
  var a = ["foo", "bar"];
  var b = "Ocorreu um erro inesperado.";

  it('Verificar se contém os valores', function() {
    expect(a).toContain("bar");
    expect(a).not.toContain("baz");
    expect(b).toContain("erro");
    expect(b).not.toContain("obrigatório");
  });
});


describe('Comparando valores', function() {
  var a = 5.123, b = 8.654;

  it('Valor "a" menor que "b"', function() {
    expect(a).toBeLessThan(b);
  });

  it('Valor "b" maior que "a"', function() {
    expect(b).toBeGreaterThan(a);
  });

  it('Valor esperado está proximo de...', function() {
    // (valor a ser convertido).toBeCloseTo(valor para comparação, precisão)
    expect(a).toBeCloseTo(5, 0);
    expect(a).not.toBeCloseTo(6, 0);
    expect(b).not.toBeCloseTo(8, 0);
  });
});


describe('Testando exceção', function() {
  var foo = function() {
    return 1 + 1;
  };

  var bar = function() {
    return a + 1;
  };

  var baz = function() {
    throw new TypeError("Ocorreu um erro inesperado.");
  }

  it('Não ocorre exceção', function() {
    expect(foo).not.toThrow();
  });

  it('Ocorre exceção', function() {
    expect(bar).toThrow();
  });

  it('Ocorre exceção TypeError', function() {
    expect(baz).toThrowError("Ocorreu um erro inesperado.");
    expect(baz).toThrowError(/erro/);
    expect(baz).toThrowError(TypeError);
    expect(baz).toThrowError(TypeError, "Ocorreu um erro inesperado.");
  });
});


describe('Retorna falha caso não ocorra o esperado', function() {
  var foo = function(x, callback) {
    if (x) {
      callback();
    }
  };

  it ('x sendo false resultado esperado', function() {
    foo(false, function() {
      // caso seja disparado o fail, o teste quebra
      fail('Resultado não esperado.');
    });
  });
});


describe('Testes pendentes', function() {
  xit('Teste ignorado', function() {
    expect(false).toBe(true);
  })

  it('Teste sem função');

  it('Teste pendente', function() {
    expect(false).toBe(true);
    pending();
  });
});


// coloando um 'x' no describle os testes 'it' não serão executados
xdescribe('Deixando de rodar todosos testes do conjunto de teste', function() {
  it ('Não será executado 1', function() {
    expect(true).toBe(true);
  });

  it ('Não será executado 2', function() {
    expect(false).toBe(false);
  });
});
