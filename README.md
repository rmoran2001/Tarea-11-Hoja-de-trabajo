Hoja de trabajo
[Hoja de Trabajo RIMG.pdf](https://github.com/user-attachments/files/16998494/Hoja.de.Trabajo.RIMG.pdf) Se utilizó la tecnologías de 

![image](https://github.com/user-attachments/assets/b3eaa9e8-01c9-4cdb-85c1-57539f472484)


Guía para Ejecutar Pruebas del Ejercicio
1. Clona el Repositorio
1.	Abre una terminal (o el símbolo del sistema en Windows).
2.	Clona el repositorio usando el siguiente comando:

Copia el link del reposotorio 
git clone https://github.com/rmoran2001/Tarea-11-Hoja-de-trabajo.git
3.	Navega a la carpeta del proyecto:
![image](https://github.com/user-attachments/assets/c92af996-65c2-42d5-a85b-e72fe9186966)

2. Instala Dependencias
1.	Asegúrate de tener Node.js instalado. Si no lo tienes, puedes descargarlo desde Node.js.
2.	Instala las dependencias del proyecto. Si tienes un archivo package.json en la raíz del proyecto, usa el siguiente comando:
npm install
![image](https://github.com/user-attachments/assets/58b19510-0a4d-42e7-8d3d-4cee99b2433c)

Esto instalará todas las dependencias listadas en el archivo package.json.
4. Verifica Configuración de Jest
1.	Asegúrate de que Jest esté configurado en el archivo package.json. Deberías tener una sección similar a esta:
![image](https://github.com/user-attachments/assets/0b4812d0-9733-478e-a850-04e59c5e0503)

Si no tienes Jest configurado, puedes instalarlo y configurarlo:
![image](https://github.com/user-attachments/assets/c51fead9-2ab2-4b50-9a54-d58177dd6572)

npm install --save-dev jest babel-jest @babel/core @babel/preset-env
Luego, agrega un archivo .babelrc o configura Babel en package.json:
![image](https://github.com/user-attachments/assets/88e5cce4-5365-4489-ab26-0bb00ef8f08e)

{
  "presets": ["@babel/preset-env"]
}
4. Ejecuta las Pruebas
1.	Ejecuta las pruebas usando el siguiente comando:
![image](https://github.com/user-attachments/assets/0531f599-910f-4d87-b9b7-beb5ebc0c8bd)
npm test
Este comando ejecutará Jest y mostrará los resultados de las pruebas en la consola.
5. Soluciona Problemas Comunes
Si encuentras problemas como errores de sintaxis o configuración:
1.	Asegúrate de que tu código esté usando la sintaxis correcta y que Jest esté configurado para soportar la sintaxis que estás usando (por ejemplo, import y export).
2.	Consulta los mensajes de error en la terminal para obtener pistas sobre lo que puede estar mal. Ajusta la configuración de Babel o Jest según sea necesario.
3.	Revisa la configuración del archivo de pruebas (numeroPrimo.test.js) para asegurarte de que esté correctamente configurado y que las rutas a los módulos sean correctas.
Ejemplo de Archivo numeroPrimo.test.js
javascript
![image](https://github.com/user-attachments/assets/19613ac7-05fe-40e6-bb81-38917b9b467d)

Resumen
1.	Clona el repositorio: git clone <URL del repositorio>
2.	Navega a la carpeta del proyecto: cd Tarea-11-Hoja-de-trabajo
3.	Instala dependencias: npm install
4.	Ejecuta las pruebas: npm test
5.	Soluciona problemas comunes si aparecen errores en la ejecución.
Estructura de carpetas
![image](https://github.com/user-attachments/assets/39d01a85-0fc8-4f94-9f2c-937de90b344e)


