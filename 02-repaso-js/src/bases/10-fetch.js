const API_KEY = 'xKxLOeWhE3sIQ8Ta35tChkDuSNWtdDPT'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
peticion
.then( resp => resp.json())
.then(({data} )=> {
    const {url} = (data.images.original);
    /*
        const img = document.createElement('img')
        img.src= url
        
        document.body.append(img)
*/
    })
    .catch(console.warn)