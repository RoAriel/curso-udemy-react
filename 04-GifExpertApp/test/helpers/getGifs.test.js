import { getGif } from "../../src/helpers/getGifs"

describe('Test helper getGif', () => {
  
    test('should retornar un arreglo de gifs', async() => {
      
        const gifs = await getGif('Bleach')

        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url:expect.any(String)
        })
        
    })

    
    
})
