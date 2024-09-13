const { esPrimo } = require('./numeroPrimo');



describe('Pruebas de clases de equivalencia y valores de frontera para números primos', () => {
  test('1: No es primo', () => {
    expect(esPrimo(1)).toBe("No es primo");
  });

  test('2: Es primo', () => {
    expect(esPrimo(2)).toBe("Es primo");
  });

  test('3: Es primo', () => {
    expect(esPrimo(3)).toBe("Es primo");
  });

  test('4: No es primo', () => {
    expect(esPrimo(4)).toBe("No es primo");
  });

  test('5: Es primo', () => {
    expect(esPrimo(5)).toBe("Es primo");
  });

  test('0: No es primo', () => {
    expect(esPrimo(0)).toBe("No es primo");
  });

  test('Número mayor como 10: No es primo', () => {
    expect(esPrimo(10)).toBe("No es primo");
  });
});
