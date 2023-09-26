# mercado_libre_back

## Índice

- [mercado_libre_back](#mercado_libre_back)
  - [Índice](#índice)
  - [Descripción General](#descripción-general)
  - [Requisitos](#requisitos)
  - [Instalación](#instalación)
  - [Uso](#uso)
  - [Endpoints](#endpoints)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Modelos](#modelos)
  - [Servicios](#servicios)
  - [Transformadores](#transformadores)
  - [Utilidades](#utilidades)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Version](#version)
  - [Licencia](#licencia)
  - [Autor](#autor)
  - [Scripts](#scripts)
  - [Pruebas](#pruebas)
  - [Enlaces Útiles](#enlaces-útiles)
  - [Capturas de Pantalla o Demo](#capturas-de-pantalla-o-demo)
  - [Contribuir](#contribuir)

## Descripción General

Mi Aplicación es un servidor basado en Express que interactúa con la API de MercadoLibre para buscar y recuperar detalles de ítems. Utiliza TypeScript y se estructura en controladores, servicios, transformadores y modelos.

## Requisitos

- Node.js
- yarn

## Instalación

1. Clonar el repositorio: `git clone https://github.com/OscarDRT/mercado_libre_back`
2. Cambiar al directorio del proyecto: `cd mercado_libre_back`
3. Instalar las dependencias: `yarn install`

## Uso

Para iniciar el servidor, ejecutar: `yarn dev`
El servidor se iniciará y escuchará en el puerto 3000.

## Endpoints

- `GET /`: Devuelve un JSON con el mensaje "ok" como indicador de salud.
- `GET /api/items?q=:query`: Realiza una búsqueda de ítems en la API de MercadoLibre utilizando la consulta proporcionada y devuelve los resultados formateados.
- `GET /api/items/:id`: Recupera detalles de un ítem específico utilizando su ID.

## Estructura del Proyecto

El proyecto se estructura en varias carpetas que organizan el código fuente:

- `src/`: Carpeta raíz del código fuente.
  - `controllers/`: Contiene los controladores, como `ItemController`.
  - `models/`: Define interfaces y tipos, como `Item` y `Author`.
  - `routes/`: Define las rutas del servidor.
  - `services/`: Contiene los servicios, como `ItemService`, que interactúan con la API de MercadoLibre.
  - `transformers/`: Contiene funciones para transformar datos, como `buildSearchResult` y `buildItemResult`.
  - `utils/`: Contiene utilidades y configuraciones, como la instancia Axios.

## Modelos

- `Item`: Representa un ítem con detalles como id, título, precio, etc.
- `Author`: Representa al autor con nombre y apellido.
- `SearchResult`: Representa el resultado de una búsqueda, incluyendo autor e ítems.
- `ItemResult`: Representa el resultado de recuperar un ítem por su ID.

## Servicios

- `ItemService`: Contiene métodos para interactuar con la API de MercadoLibre, como `searchItems` y `getItemById`.

## Transformadores

- `buildSearchResult`: Construye un objeto SearchResult a partir de la respuesta de la API.
- `buildItemResult`: Construye un objeto ItemResult a partir de las respuestas de la API.

## Utilidades

- `axiosInstance`: Configuración de Axios para interactuar con la API de MercadoLibre.

## Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías, frameworks y bibliotecas principales:

- Node.js
- Express
- TypeScript
- Axios

## Version

La versión actual del proyecto es 1.0.0.

## Licencia

Este proyecto está bajo la licencia ISC. Para más detalles, por favor vea [ISC License](https://opensource.org/licenses/ISC).

## Autor

- **Nombre:** Oscar Riaño Tapias
- **Correo Electrónico:** [oscardrtdev@gmail.com](mailto:oscardrtdev@gmail.com)
- **GitHub:** [OscarDRT](https://github.com/OscarDRT)
- **LinkedIn:** [Oscar Riaño Tapias](https://www.linkedin.com/in/oscardrt/)

## Scripts

Este proyecto contiene los siguientes scripts que puedes ejecutar:

- `yarn start`: Inicia el servidor.
- `yarn dev`: Inicia el servidor en modo desarrollo.
- `yarn build`: Compila el proyecto.

## Pruebas

Este proyecto no contiene pruebas actualmente. Si deseas contribuir añadiendo pruebas, por favor consulta la sección de [Contribuir](#contribuir).

## Enlaces Útiles

- [Repositorio del Proyecto](https://github.com/OscarDRT/mer_lib_back)
- [Reportar un Problema](https://github.com/OscarDRT/mer_lib_back/issues)
- [api](https://merliback.onrender.com)

## Capturas de Pantalla o Demo

Actualmente no hay capturas de pantalla o demo disponibles. Si deseas contribuir a esto, por favor consulta la sección de [Contribuir](#contribuir).

## Contribuir

Para contribuir al proyecto, por favor revisa las [directrices de contribución](CONTRIBUTING.md) y asegúrate de seguir los estándares y directrices establecidos. Puedes reportar problemas o sugerencias a través de [GitHub Issues](https://github.com/OscarDRT/mer_lib_back/issues) y enviar tus mejoras o correcciones a través de Pull Requests.

Te agradezco tu interés en mejorar este proyecto. Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto.
