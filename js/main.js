'use strict';
//


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
2- Tenemos que añador un tamaño, texot y colores
*/

/*
*/ 

const buttonSearch = document.querySelector('.js-btn-search');
const inputSearch = document.querySelector('.js-text');
const buttonReset = document.querySelector('.js-btn-reset');
const ulCounter = document.querySelector('.js-counter-list');



// con esta función pintaremos los datos del servidor y con render recorrera el array que nos devuelve. necesitaremos un parámetro, tenemos que recorrer el array para que nos recoja todos los datos con un bucle(for) porque nos devuelve todos los datos.
//pintamos en HTML los elementos que necesitamos(una lista y dentro de  la lista un h3 y una imagen) 
const renderDrinks = (arrayDrinks) =>{
    // con esto hacemos que el bucle no se acumule
    ulCounter.innerHTML='';
    for(const eachDrink of  arrayDrinks){
        //creamos los elementos y los añadimos al DOM por orden jerarquico el 'h3' y ls 'li' son hijos de la 'ul

        const newList = document.createElement('li');
        ulCounter.appendChild(newList);

        const newImage = document.createElement('img');
        newImage.setAttribute('src', eachDrink.strDrinkThumb);
        newImage.setAttribute('alt', eachDrink.strDrink);
        newList.appendChild(newImage);

        const newName = document.createElement('h3');
        newList.appendChild(newName);
        const newTextName = document.createTextNode(eachDrink.strDrink);
        newName.appendChild(newTextName);
    };
};



// Recoger los datos de la API haciendo fecht y creando una nueva funcion que recogera el el valor del inpunt con un parametro(searchValue), dentro de esta funcion necesitamos añadir una busqueda de cualquier bebida que escriban los usuarios  
const getDataApi = (searchValue)=>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`)
    //Aqui tenemos los datos del servidor donde se tienen que ejecutar los datos 
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        //llamamos al array para que se ejecute en está funcion
        renderDrinks(data.drinks)
    });
};


// funcion manejadora del evento
const handleInputSearch = () =>{
    const searchValue = inputSearch.value; //cogemos el valor del input
    getDataApi(searchValue);//llamamos al valor del input
};
inputSearch.addEventListener('input',handleInputSearch); //realizamos el evento sobre el input



function handleClickSearch(){
console.log('Say hi');
};
buttonSearch.addEventListener('click', handleClickSearch);// realizamos el evento click sobre el boton de buscar

