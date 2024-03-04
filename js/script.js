/* Selectores */
const busqueda = document.querySelector('#busqueda');
const peliculas = document.querySelector('.peliculas')

/* 1. Escuchar y GuardarBúsqueda */
let busquedaGuardada = ``;

busqueda.addEventListener('input', (e=>{
    busquedaGuardada = e.target.value

    getDataApiMovies();
}));

/* 2.1 Tomar info de la API */

function getDataApiMovies(){
    fetch(`https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?apikey=da9668e3&s='${busquedaGuardada}'`)
    .then(respuesta=>{
/*      console.log(respuesta.json()); */
        return respuesta.json();
    })
    .then(datosRespuesta=>{
        showMovies(datosRespuesta.Search);
    })
}

/* 2.2 Insertar info */

/* 4. Arrojar Cards */
function showMovies(movies){
    peliculas.innerHTML = ``;
    
    movies.forEach(movie => {
        const {Title, Year, Type, Poster} = movie;
    
        peliculas.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${Poster}" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-text">${Title}</h3>
                <p class="card-text">${Year}</p>
                <p class="card-text">${Type}</p>
            </div>
        </div>
        
        <br>`

    });
}

document.addEventListener("DOMContentLoaded", ()=>{
    defaultDataArray();
});

function defaultDataArray(){
    fetch('https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?apikey=da9668e3&s=rocky')
    .then(respuesta=>{
        console.log(respuesta);
        console.log(respuesta.status);
        return respuesta.json();
    })
    .then(dataArray=>{
        showMovies(dataArray.Search);
    })
}
