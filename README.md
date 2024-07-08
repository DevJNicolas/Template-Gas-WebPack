# Proyecto de Integración con Google Apps Script

Este proyecto utiliza webpack junto con GasPlugin y TerserPlugin para compilar y optimizar código destinado a ser ejecutado en entornos de Google Apps Script. Facilita la creación y mantenimiento de scripts robustos y eficientes para diversas aplicaciones y automatizaciones en Google Workspace.

## Configuración de Webpack

El proyecto utiliza webpack para compilar y optimizar el código. A continuación se muestra la configuración clave de webpack que asegura el funcionamiento adecuado del proyecto en el entorno de Google Apps Script.

### Detalles de Configuración

El archivo de configuración `webpack.config.js` es esencial para compilar el código y prepararlo para su despliegue. Aquí están los puntos clave de configuración que pueden ser ajustados según las necesidades del proyecto:

- **Entry Point** (`entry`): Este es el punto de entrada del proyecto. Actualmente configurado en `src/index.js`, puedes modificarlo según la estructura de tu proyecto y las funciones específicas necesarias para tu script de Google Apps.

- **Directorio de Salida** (`outDir` y `outName`):
  - `outDir`: El directorio de salida está configurado para ser el directorio actual. Puedes cambiarlo según la estructura de tu proyecto agregando la ruta en los parametros de la función `assignPath()`.
  - `outName`: El nombre del archivo de salida es `Code.js` por defecto. Ajusta este valor según tus preferencias y requisitos de despliegue.

- **Plugins Utilizados**:
  - `GasPlugin`: Este plugin ajusta automáticamente las exportaciones globales necesarias para que el código funcione correctamente en el entorno de Google Apps Script.
    - `autoGlobalExportsFiles`: Se asegura de que el archivo especificado en `entry` tenga sus exportaciones globales configuradas automáticamente.

- **Optimización**:
  - `TerserPlugin`: Se utiliza para minimizar el tamaño del archivo de salida (`Code.js`). Esto es crucial para mantener el rendimiento óptimo del script en el entorno de Google Apps Script.

### Uso de Módulos (Export) en Google Apps Script
    
A partir de ahora, es recomendable utilizar módulos (`export`) para organizar y exportar funciones en JavaScript dentro de tu proyecto. Esto facilita una estructura clara y modular del código.
```javascript
//src/Controller/General.js
export const doGet = () => {
    return "Hello from Google Apps Script!";
};
```
### Uso de Funciones Globales en Google Apps Script
Se necesita definir funciones globales directamente en `index.js` para su uso en Google Apps Script como desencadenadores (`triggers`) o desde interfaces web mediante `google.script.run.`

```javascript
//src/Index.js
const { doGet } = require("./Controller/General");
global.doGet = doGet;
```

### Uso

Para utilizar este proyecto, sigue estos pasos:

1. **Clonar el Repositorio**

   Clona este repositorio a tu máquina local usando Git:
    ```bash
    git clone https://github.com/DevJNicolas/Template-Gas-WebPack
    ```
2. **Instalación de Dependencias**

    Asegúrate de tener Node.js y npm instalados. Luego, instala las dependencias del proyecto ejecutando:
    ```bash
    npm install
    ```
3. **Compilación**

    Para compilar el proyecto, ejecuta el siguiente comando:
    ```bash
    npm run build
    ```
    Este comando utilizará webpack para compilar el código del punto de entrada que hayas configurado en el archivo `webpack.config.js` en el archivo de salida optimizado y listo para desplegar.


4. **Despliegue**

    Una vez compilado el proyecto, puedes desplegar el archivo de salida (`Code.js`) en tu entorno de desarrollo o producción según sea necesario.

### Notas adicionales

- Asegúrate de revisar y ajustar los parámetros de configuración en `webpack.config.js` según las necesidades específicas de tu proyecto y entorno de Google Apps Script.
- Este proyecto está configurado en modo de desarrollo (`mode: "development"`), optimizado para ejecución en el servidor.
- El uso de `GasPlugin` y `TerserPlugin` garantiza que el código se optimice correctamente y esté listo para su ejecución en Google Apps Script.


