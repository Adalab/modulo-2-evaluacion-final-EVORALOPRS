# Anime Search and Favorites

### Descripción

Anime Search and Favorites es una aplicación web que permite a los usuarios buscar animes utilizando la API de Jikan, seleccionar sus animes favoritos y almacenarlos localmente para futuras visitas. La aplicación está diseñada para ser intuitiva y proporcionar una experiencia de usuario fluida.

### Características

- Búsqueda de Animes: Los usuarios pueden buscar animes por nombre.
- Visualización de Resultados: Los resultados se muestran en una lista con el título, imagen y sinopsis de cada anime.
- Gestión de Favoritos: Los usuarios pueden marcar animes como favoritos, los cuales se muestran en una lista separada.
- Persistencia de Datos: Los animes favoritos se guardan en localStorage, lo que permite que los datos persistan entre sesiones.

### Tecnologías Utilizadas

- HTML5: Para la estructura del contenido.
- CSS3: Para el diseño y los estilos.
- JavaScript (ES6+): Para la lógica de la aplicación, manejo del DOM, interacción con la API y persistencia de datos con localStorage.
API Jikan: Utilizada para obtener información de los animes.

### Instalación
1. Clonar el Repositorio:
git clone https://github.com/Adalab/modulo-2-evaluacion-final-EVORALOPRS.git
cd anime-search-favorites
2. Abrir el Archivo index.html:
Abre el archivo index.html en un navegador para ver la aplicación en acción.

### Uso

1. Buscar Animes:
- Ingresa el nombre de un anime en el campo de búsqueda y haz clic en el botón de búsqueda. Los resultados se mostrarán en una lista en la página.
2. Añadir a Favoritos:
- Haz clic en un anime de la lista de resultados para añadirlo a tu lista de favoritos. El anime será resaltado y aparecerá en la lista de favoritos.
3.Eliminar de Favoritos:
- Próximamente: Se implementará la funcionalidad para eliminar animes de la lista de favoritos.
4.Persistencia de Favoritos:
- Los animes añadidos a favoritos se guardan en localStorage y se mantendrán incluso si cierras y vuelves a abrir el navegador.

### Estructura del Proyecto

anime-search-favorites/

├── index.html

├── styles/
│   └── styles.css

└── scripts/
    └── main.js
- index.html: Contiene la estructura principal de la página.
- styles/styles.css: Archivo CSS para los estilos de la aplicación.
- scripts/main.js: Archivo JavaScript que contiene toda la lógica para la búsqueda de animes, la gestión de favoritos y la manipulación del DOM.

### Funcionalidades Futuras

- Eliminar Favoritos: Implementar la opción de eliminar animes de la lista de favoritos.
- Manejo de Errores: Mejorar el manejo de errores durante la búsqueda de animes y la conexión con la API.
- Optimización de la Interfaz: Mejoras en la interfaz de usuario, como agregar mensajes de confirmación o alertas.

### Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir:
1. Haz un fork del repositorio.
2. Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
3. Haz commit de tus cambios (git commit -m 'Añadir nueva funcionalidad').
4. Sube tu rama (git push origin feature/nueva-funcionalidad).
5. Abre un Pull Request.


### Autor
@EVORALOPRS 
