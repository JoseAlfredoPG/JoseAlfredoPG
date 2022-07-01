
let main=document.getElementById('contenido');


// creo un template para despues clonarlo
const template=document.createElement('template');


function clonar(url,titulo,texto){
    template.innerHTML=`
    <div class="card col-8 col-sm-5 pt-2 mt-4">
        <img src="${url}" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">${titulo}</h5>
            <p class="card-text">${texto}</p>
            <a href="https://api.nasa.gov/" class="btn btn-primary">Informacion</a>
        </div>
    </div>
    `;
}

function datos(){
     fetch('https://api.nasa.gov/planetary/apod?api_key=VjoooskqkJvdMzvLcyKVzGkMMGJ3krWxooT2ed3K')
    .then(res => res.json())
    .then(json => {
        let explanation=json.explanation;
        let url=json.url;
        let title=json.title;
// clono el template mandando los parametros para remmplazar en el template primero
        clonar(url,title,explanation)
        const markup = template.content.cloneNode((true));
        main.appendChild(markup);
        console.log(explanation)
        console.log(url)
        console.log(title)
    })
}   


datos()