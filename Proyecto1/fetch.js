//"original_title"
//overview
//"poster_path
const apiKey= '8fa8fe67b5f6b84aedfe04b2350639db';

//const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
const peticion = fetch(`https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`);

peticion
//esto se conoce como promesa en cadena
              
        .then(response => response.json())
        .then(json => {
            const title = json.original_title;
            const overview = json.overview;
            const poster = json.poster_path;
            const home = json.homepage;
            //const production_companies = data.production_companies;
            /*production_companies.map(pelicula => {
                console.log(pelicula)
                return 'el prodcuto es ' + pelicula;
            
            })*/
            console.log(title);
            const titulo = document.createElement('h1');
            titulo.textContent= title;
            const over = document.createElement('h2');
            over.textContent=overview;
            const img = document.createElement('img');
            img.src ='https://image.tmdb.org/t/p/w500' + poster;
            
            console.log(img)
            document.body.appendChild(titulo);
            document.body.appendChild(over);
            document.body.appendChild(img);
            
        })
        .catch(console.warn);

        