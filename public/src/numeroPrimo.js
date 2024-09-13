// src/numeroPrimo.js
function esPrimo(numero) {
    const clasesEquivalencia = [
      { clase: "Número < 2", resultado: "No es primo" },
      { clase: "Número primo", resultado: "Es primo" },
      { clase: "Número no primo >= 2", resultado: "No es primo" }
    ];
  
    const valoresFrontera = [
      { valor: 1, esperado: "No es primo" },
      { valor: 2, esperado: "Es primo" },
      { valor: 3, esperado: "Es primo" },
      { valor: 4, esperado: "No es primo" },
      { valor: 5, esperado: "Es primo" }
    ];
  
    console.table(clasesEquivalencia);
    console.table(valoresFrontera);
  
    if (numero < 2) return "No es primo";
    
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) return "No es primo";
    }
    
    return "Es primo";
  }
  
  module.exports = { esPrimo };