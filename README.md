# Weather App

- Esta aplicación muestra la información meteorológica para tres ciudades (Londres, Madrid, Murcia) en dos idiomas (Inglés y Español).

- Se ha codificado esta app integramente en JavaScript (idealmente el archivo de llamadas a mi gusto lo habría generado con TS, tipando las llamadas mediante la creación de interfaces)

- En la aplicación podrás ver los datos meteorológicos como temperatura, máxima temperatura, minima temperatura, humedad y presión, tambien podras ver como datos adicionales una estimación de la temperatura a lo largo de las horas del mismo dia.

- Como estilado de la página he optado por usar Tailwindcss, que nos permite crear interfaces de usuario de una forma muy sencilla de leer y altamente personalizable (personalmente, es de mis opciones preferidas para estilar, unidas a librerias como chackra o prime-react y alguna libreria de animación, obtenemos unos resultados muy agradables en cuanto a diseño para el usuario).

- En las llamadas, se ha optado por cachear por idioma las diferentes llamadas, de este modo, una vez que hayas consultado todas las ciudades en Inglés por ejemplo, la aplicación habrá cacheado dichas llamadas, no volviendolas a ejecutar hasta haber cambiado el idioma o haber pasado 5 minutos, en una app tan pequeña no se nota  la diferencia apenas, pero en grandes proyectos, por ejemplo al crear una tabla con numerosos datos, es tiempo que el usuario gana, ahorramos llamadas innecesarias y optimizamos la aplicación.

- Para los distintos idiomas, hemos usado la libreria i18n, que usandola como contexto global de la aplicación, nos permite traducir de forma sencilla (mediante unos archivos json personalizados por nosotros mismos) nuestra aplicación a cualquier idioma que deseemos, recordar que no es automático, podemos traducir a cualquier idioma del cual podamos sacar nosotros la traducción.

- Se incluyeron fotos de las ciudades para darle un toque agradable a la interfaz, como "upgrade" de la aplicación, si conociesemos todos los estados meteorológicos que pudisesemos obtener de la api (Soleado, lluvioso, Nublado, etc...) podriamos manejar diferentes imagenes de dichas ciudades con el estado actual del tiempo, o generar un fondo animado con dicho estado meteorológico.

## Demo

· Podemos encontrar una demo de la app [aquí](https://weather-app-ten-steel.vercel.app/)

## Uso

Seleccione el idioma en la esquina superior derecha y elija una ciudad del menú desplegable. La información meteorológica se mostrará a continuación.

## Instalación

1. Clonar el repositorio
2. Instalar las dependencias con `npm install`
3. Ejecutar la aplicación con `npm start`

## Tests

Los test los encontraremos en la carpeta de componentes, se han creado test para los 3 componentes principales como prueba.
Para correr los tests, ejecute `npm test`.

## Dependencias

- React
- i18next
- react-i18next
- Date-fns
- Jest
- React Testing Library
