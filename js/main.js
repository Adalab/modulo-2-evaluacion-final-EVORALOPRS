'use strict';

/* Primera parte
1- Pedimos los datos al servidor con fech(url)
2- Traemos el input donde se recogeran los dados del servidor habiendo añadido las clase
3- Hacemos un evento sobre el Input, buscamos los datos del api
4- Sacar el valor del input
5- Buscar los datos de la Api
6- Pintarlos 
*/

/* Segunda parte
1- si la los datos de la Api no nos devuvlve una imagen, le tenemos que añadir: https://via.placeholder.com/210x295/ffffff/666666/?text=TV
2- Tenemos que añador un tamaño, texto y colores
*/

/* Tercera parte
1- añadir las bebidas marcadas a favoritos
si la bebida no aparece en favoritos, tenemos que añadirla, si existe en el array de favoritas no hago nada(usamos una condidional) 
2- tenemos que escuchar el evento sobre la bebida seleccionada que se encuentra en una 'li', tenemos que escuchar sobre todas las 'li'
--> añadimos una clase con un color de fondo
--> añadir a la lista los favoritos creando una array que se acumulen las bebidas favoritas
--> añadimos un id (usaremos find y findIndex)
--> tienen que aparecer a la izquierda, pintando 
*/ 

/* Cuarta parte
1- Añadir los datos al localStorage
2- Cuando recarge la pagina que se almacenen los animes seleccionados por el usuario 
*/ 
const buttonSearch = document.querySelector('.js-btn-search');
const inputSearch = document.querySelector('.js-text');
const buttonReset = document.querySelector('.js-btn-reset');
const ulCounter = document.querySelector('.js-counter-list');
const ulCounterFavorites = document.querySelector('.js-favorite-list');


// creamos un nueva variable donde recogerá los datos del servidor 
let animeList = [];
// creamos un nuevo array vacío donde se recogeran las bebidas favoritas marcadas por el usuario 
let favoriteAnimes = [];

const handleClickFavoriteAnime = (event) =>{
  //cogemos el ID
  console.log(event.currentTarget.id);
  const idList = parseInt(event.currentTarget.id);// guardamos el Id dentro de una variable que hemos recogido en el evento click 
  //buscamos el id a ver si esta dentro del array con un bucle y usamos el findIndex(posicion del array)(si no está devuelve -1) para buscar el ID de las bebidas favoritas( nos lo devuelve)
  const findIndexAnimeFavorite = favoriteAnimes.findIndex((itemAnime)=> itemAnime.mal_id === idList);
  console.log(findIndexAnimeFavorite) // nos da -1 porque aún no tenemos nada añadido en el array
  //accedemos una condicional para añadir todo el objeto de los animes dentro de array de favorito, tenemos que buscar todo el la informacion del objeto de animes

  if(findIndexAnimeFavorite === -1){
    //obtenemos la información del elemento completo dentro del array, porque ahora solo tenemos el ID,con el find() buscamos el 'id'
    const findAnime = animeList.find((item2Anime) => item2Anime.mal_id === idList);
    console.log (findAnime);
    // Meter dentro del array favorite Animes el findAnime(con el push)
    favoriteAnimes.push(findAnime)
    //Llamamos a la funcion para que añada a la lista de favoritos
    renderAnimesFavorites(favoriteAnimes);
    // todos los elementos de los animes tienen que ser igual al id que ha seleccionado el usuario

    //Guardamos los datos en LS, lo convertimos en un array dado que nos da un string con 'JSON.stringify'
     localStorage.setItem('anime',JSON.stringify(favoriteAnimes)); 
    //pintamos en el HTML

    // Añadimos la clase para cambiar el estilo del elemento clicado
   event.currentTarget.classList.add('favorite-selected');
  };
  
 
};
//Creamos una función en el que le pasemos un parametro con cualquier nombre porque necesitamos llamar al array las veces que haga falta. 

//funcion click para eliminar los animes almacenados en la lista de favoritos




 // creamos una la lista de los animes favoritos para que se añadan los animes seleccionados
const renderAnimesFavorites = (arrayAnimesFavorite) =>{
    ulCounterFavorites.innerHTML = '';
    for(const eachAnimeFavorite of arrayAnimesFavorite){
        const newFavoriteList = document.createElement('li');
        newFavoriteList.setAttribute('id',eachAnimeFavorite.mal_id);
        newFavoriteList.setAttribute('class', 'animeCardFavorite');
        ulCounterFavorites.appendChild(newFavoriteList);

        const newFavoriteName = document.createElement('h3');
        newFavoriteList.appendChild(newFavoriteName);
        const newFavoriteTextName = document.createTextNode(eachAnimeFavorite.title)
        newFavoriteName.appendChild(newFavoriteTextName);
        

        const newImagefavorite = document.createElement('img');
        if(eachAnimeFavorite.images.jpg.image_url === null){
            newImagefavorite.setAttribute('src','https://via.placeholder.com/210x295/ffffff/666666/?text=anime')
        };
        
        newImagefavorite.setAttribute('src', eachAnimeFavorite.images.jpg.image_url);
        newImagefavorite.setAttribute('alt', eachAnimeFavorite.title);
        newImagefavorite.setAttribute('class','sizeImg');
        newFavoriteList.appendChild(newImagefavorite);
        
        const newBtnDeleteFavorite = document.createElement('button');
        newFavoriteList.appendChild(newBtnDeleteFavorite);

        const newBtnDeleteFavoriteIcon = document.createElement('i');
        newBtnDeleteFavoriteIcon.setAttribute('class','fa-sharp fa-solid fa-circle-xmark');
        newBtnDeleteFavorite.appendChild(newBtnDeleteFavoriteIcon);
        //newBtnDeleteFavoriteIcon.addEventListener('click',handleClickDeleteFavorite);
        
        //Buscamos si el anime si es  favorita( si esta que nos devuelva diferente de undefine y añadimos la clase de animeFavoite)
  
    };
   
};
//guardamos los datos del servidor en el Array conviertiendo los datos con 'JSON.parse'.
const animeLS = JSON.parse(localStorage.getItem('anime'));
//animeLS !== null
if(animeLS !== null){
    favoriteAnimes = animeLS;
    renderAnimesFavorites(favoriteAnimes)
};

    //pintamos los datos





// con esta función pintaremos los datos del servidor y con render recorrera el array que nos devuelve. necesitaremos un parámetro, tenemos que recorrer el array para que nos recoja todos los datos con un bucle(for) porque nos devuelve todos los datos.
//pintamos en HTML los elementos que necesitamos(una lista y dentro de  la lista un h3 y una imagen) 
const renderAnimes = (arrayAnimes) =>{
    // con esto hacemos que el bucle no se acumule
    ulCounter.innerHTML='';
    for(const eachAnime of  arrayAnimes){
        //creamos los elementos y los añadimos al DOM por orden jerarquico el 'h3' y las 'li' son hijos de la 'ul
        const newList = document.createElement('li');
        ulCounter.appendChild(newList);
        newList.setAttribute('class', 'animeCard');
        // añadimos un ID a la lista 
        newList.setAttribute('id',eachAnime.mal_id);
        newList.addEventListener('click', handleClickFavoriteAnime);

        const newName = document.createElement('h3');
        newList.appendChild(newName);
        const newTextName = document.createTextNode(eachAnime.title);
        newName.appendChild(newTextName);

        const newImage = document.createElement('img');
        if(eachAnime.images.jpg.image_url === null){
            newImage.setAttribute('src','https://via.placeholder.com/210x295/ffffff/666666/?text=anime')
        };
        newImage.setAttribute('src', eachAnime.images.jpg.image_url);
        newImage.setAttribute('alt', eachAnime.title);
        newImage.setAttribute('class','sizeImg')
        newList.appendChild(newImage);

        const newText = document.createElement('p');
        newText.setAttribute('class','paragraph');
        newList.appendChild(newText)
        const counterText = document.createTextNode(eachAnime.synopsis);
        newText.appendChild(counterText);

        
    };
    
};



// Recoger los datos de la API haciendo fetch y creando una nueva funcion que recogera el el valor del inpunt con un parametro(searchValue), dentro de esta funcion necesitamos añadir una busqueda de cualquier bebida que escriban los usuarios  
const getDataApi = (searchValue) => {
    //https://api.jikan.moe/v4/anime?q=naruto
    fetch(`https://api.jikan.moe/v4/anime?q=${searchValue}`)
    //Aqui tenemos los datos del servidor donde se tienen que ejecutar los datos 
    .then(response => response.json())
    // nombre puede ser cualquiera, no es data que nos da el objeto de los datos del servidor
    .then((anime) => {
        console.log(anime.data);
        animeList = anime.data; // guardamos los datos del servidor en mi array

        //llamamos al array para que se ejecute en está funcion
       renderAnimes(animeList);

    });
};

getDataApi('naruto');

// funcion manejadora del evento
function handleClickSearch(event){
    console.log('Say hi');
    event.preventDefault();
    const searchValue = inputSearch.value; //cogemos el valor del input
    getDataApi(searchValue);//llamamos al valor del input
    
};
buttonSearch.addEventListener('click', handleClickSearch);// realizamos el evento click sobre el boton de buscar

