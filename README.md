Hoja de trabajo
[Hoja de Trabajo RIMG.pdf](https://github.com/user-attachments/files/16998494/Hoja.de.Trabajo.RIMG.pdf) Se utilizó la tecnologías de 

![image](https://github.com/user-attachments/assets/b3eaa9e8-01c9-4cdb-85c1-57539f472484)

Guía para Ejecutar Pruebas del Ejercicio
1. Clona el Repositorio
Abre una terminal (o el símbolo del sistema en Windows).

Clona el repositorio usando el siguiente comando:

bash
Copiar código
git clone https://github.com/rmoran2001/Tarea-11-Hoja-de-trabajo.git
Navega a la carpeta del proyecto:

bash
Copiar código
cd Tarea-11-Hoja-de-trabajo
2. Instala Dependencias
Asegúrate de tener Node.js instalado. Si no lo tienes, puedes descargarlo desde Node.js.

Instala las dependencias del proyecto. Si tienes un archivo package.json en la raíz del proyecto, usa el siguiente comando:

bash
Copiar código
npm install
Esto instalará todas las dependencias listadas en el archivo package.json.

3. Verifica Configuración de Jest
Asegúrate de que Jest esté configurado en el archivo package.json. Deberías tener una sección similar a esta:

json
Copiar código
"scripts": {
  "test": "jest"
},
"devDependencies": {
  "jest": "^XX.XX.XX",
  "babel-jest": "^XX.XX.XX",
  "@babel/core": "^XX.XX.XX",
  "@babel/preset-env": "^XX.XX.XX"
}
Si no tienes Jest configurado, puedes instalarlo y configurarlo:

bash
Copiar código
npm install --save-dev jest babel-jest @babel/core @babel/preset-env
Luego, agrega un archivo .babelrc o configura Babel en package.json:

json
Copiar código
{
  "presets": ["@babel/preset-env"]
}
4. Ejecuta las Pruebas
Ejecuta las pruebas usando el siguiente comando:

bash
Copiar código
npm test
Este comando ejecutará Jest y mostrará los resultados de las pruebas en la consola.

5. Soluciona Problemas Comunes
Si encuentras problemas como errores de sintaxis o configuración:

Asegúrate de que tu código esté usando la sintaxis correcta y que Jest esté configurado para soportar la sintaxis que estás usando (por ejemplo, import y export).

Consulta los mensajes de error en la terminal para obtener pistas sobre lo que puede estar mal. Ajusta la configuración de Babel o Jest según sea necesario.

Revisa la configuración del archivo de pruebas (numeroPrimo.test.js) para asegurarte de que esté correctamente configurado y que las rutas a los módulos sean correctas.

Ejemplo de Archivo numeroPrimo.test.js
javascript
Copiar código
import { esPrimo } from './numeroPrimo';

describe('Función esPrimo', () => {
  it('debería devolver true para números primos', () => {
    expect(esPrimo(2)).toBe(true);
    expect(esPrimo(3)).toBe(true);
    expect(esPrimo(5)).toBe(true);
  });

  it('debería devolver false para números no primos', () => {
    expect(esPrimo(4)).toBe(false);
    expect(esPrimo(6)).toBe(false);
    expect(esPrimo(9)).toBe(false);
  });
});
Resumen
Clona el repositorio: git clone <URL del repositorio>
Navega a la carpeta del proyecto: cd Tarea-11-Hoja-de-trabajo
Instala dependencias: npm install
Ejecuta las pruebas: npm test
Soluciona problemas comunes si aparecen errores en la ejecución.
