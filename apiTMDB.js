
const api_key="ea41dd43676ae76624b231e73b8158d7";

async function cargarPelicula() {

    // fetch('https://api.themoviedb.org/3/movie/550?api_key=ea41dd43676ae76624b231e73b8158d7')
    // .then(response => response.json())
    // .then(json => {
    //     console.log(json)

    //     //si la respuesta es incorrecta
    //     if(json.success===false) {
    //         console.log(json.status_message)
    //     }
    //     else{//si la respuesta es correcta
    //         console.log(json.title)
    //     }
    // } )


    try {
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/550?api_key=ea41dd43676ae76624b231e73b8158d7');

        console.log(respuesta);
        // Si la respuesta es correcta
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            console.log(datos.title, 'datos');
        }
        else if (respuesta.status === 401) {
            console.log('Api Key Invalida')
        }
        else {
            console.log('No se ha podido encontrar el recurso solicitado')
        }
    }
    catch (error) {
        console.log(error);
    }


}

// cargarPelicula();
peliculasPopulares();


// obeteber lista de peliculas mas populares


let main=document.getElementById('main');
let template=document.createElement('template');
let basePoster='https://image.tmdb.org/t/p/w500/'
function clonarTemplate(imagen,title){
   template.innerHTML=`
    <div class="item col-md-4 col-sm-5 text-center">
        <img src=${imagen}>
        <div><span>${title}</span></div>
    </div>
   `
}

 function peliculasPopulares(){
     fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
     .then(response => response.json())
     .then(json => {

        // Si la respuesta es incorrecta muestra el mensaje de error
         if(json.success===false)
         {
             console.log(json.status_message)
         }
         else{//si la respues es coorecta ingresa a este bloque de codigo e
            console.log(json.results) ;
            const resultados=json.results.map(res=>{
                console.log(res.title)
                let Poster=basePoster+res.poster_path ;
                console.log(Poster)
                clonarTemplate(Poster, res.title);
                let clonado=template.content.cloneNode(true) ;
                main.appendChild(clonado) ;

            })
         }
     })
 }