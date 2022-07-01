
let main = document.getElementById('main');
let item = document.getElementsByClassName('item');
let reproductor = document.getElementById('reproductor');
let inputSearch = document.getElementById('inputSearch');
let btnSearch = document.getElementById('btnSearch');
let template = document.createElement('template');

btnSearch.addEventListener('click', function (e) {
    main.textContent = '';
    e.preventDefault();
    let artista = inputSearch.value;
    let s = artista.replace(/ /g, "%20")
    console.log(artista);
    console.log(s);
    obtenerListado(s)
})

function clickItem(e) {
    console.log(e)
    console.log(e.attributes.name)
    let id = e.attributes.name.textContent;
    clonarReproductor(id);
    let clonado = template.content.cloneNode(true);
    reproductor.innerHTML = '';
    reproductor.appendChild(clonado)
}
function clonarTemplate(nombreCancion, id, nombreArtista) {
    template.innerHTML = `
         <div class="item" id="item" name="${id}" onclick="clickItem(this)"><span>${nombreArtista}=> ${nombreCancion}</span></div>
    `
}

function clonarReproductor(id) {
    console.log('entro al clonar reproduct', id);
    //     template.innerHTML=`
    //     <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5AMvBCtX2rspUdoeJ9IsPN?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> 
    // `

    // modo expandido
    // template.innerHTML=`
    //     <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${id}?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> 
    // `

    // modo compacto
    template.innerHTML = `
        <iframe class="frame" style="border-radius:12px" src="https://open.spotify.com/embed/track/${id}?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        `
 }

function obtenerListado(artista) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '14deda4f66msh01fe12fda279d1fp1003c6jsnbbef4ede0caa',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    fetch(`https://spotify23.p.rapidapi.com/search/?q=${artista}&type=tracks&limit=10&numberOfTopResults=5`, options)
        .then(response => response.json())
        .then(json => {
            console.log(json.tracks.items);
            json.tracks.items.map(track => {
                let nombreCancion = track.data.name;
                let idCancion = track.data.id;
                let nombreArtista='';
                let contador=track.data.artists.items.length;
                console.log(contador);
                track.data.artists.items.map(nombre => {
                    if(contador>1)
                    { nombreArtista=nombreArtista+nombre.profile.name+'-';}
                    else{ nombreArtista=nombre.profile.name; }
                   
                });
                console.log(nombreArtista);
                console.log(nombreCancion);
                console.log(idCancion);

                clonarTemplate(nombreCancion, idCancion,nombreArtista);
                let clonado = template.content.cloneNode(true);
                main.appendChild(clonado);
            })


        })
        .catch(err => console.error(err));

}












function getSpotify() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '14deda4f66msh01fe12fda279d1fp1003c6jsnbbef4ede0caa',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    fetch('https://spotify23.p.rapidapi.com/search/?q=eminem&type=artist&limit=3&numberOfTopResults=5', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

// "The biggest and best tracks from Eminem including River with Ed Sheeran, Without Me, Lose Yourself, Stan, Love The Way You Lie feat. <a href=\"https://open.spotify.com/user/best-of-the-best/playlist/1zI5mQ3BgVx2HS4UuyJMMH?si=yWdG55qFRrOCwYOiLyEhsw\">Rihanna</a>, My Name Is and so much more. Check out The <a>Best Of The Best</a> profile for more great playlists!"

function prueba() {
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
        let element = document.getElementById('embed-iframe');
        let options = {
            // uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
            uri: 'spotify:episode:5Qx5jecKgXZ8xGaYfIu9FL'
        };
        let callback = (EmbedController) => { };
        IFrameAPI.createController(element, options, callback);
    };
}



//   https://open.spotify.com/embed/episode/7makk4oTQel546B0PZlDM5?utm_source=oembed