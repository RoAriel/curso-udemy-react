export const getImagen = async() => {

    try {

        const API_KEY = 'xKxLOeWhE3sIQ8Ta35tChkDuSNWtdDPT'
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ API_KEY }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url

    } catch (error) {
        // manejo del error
        console.error(error)
        return 'IMG no encontrada'
    }
    
    
    
}


