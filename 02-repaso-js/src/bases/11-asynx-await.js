const API_KEY = 'xKxLOeWhE3sIQ8Ta35tChkDuSNWtdDPT'



const getImagen = async()=>{


    try {

        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
        const {data} = await resp.json()
        
        const {url} = (data.images.original);
            const img = document.createElement('img')
            img.src= url
            
            document.body.append(img)
        
    } catch (error) {
        console.warn(error);
        
    }
    
}
console.log(getImagen());