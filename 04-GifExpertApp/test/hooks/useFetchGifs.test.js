import { renderHook, waitFor } from '@testing-library/react'
import {useFetchGifs} from '../../src/hooks/useFetchGifs'
describe('Test customHook useFetchGifs' , ()  => {
  
    const category = 'One Piece'

    test('should regresar el estado inicial', () => {
      
        const { result } = renderHook(() => useFetchGifs(category))
        const {images, isLoading} = result.current

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()       
        
    })

    test('should retornar un arreglo de imgas y el isloading en false', async() => {
      
        const { result } = renderHook(() => useFetchGifs(category))
        
        await waitFor(
            () => expect( result.current.images.length).toBeGreaterThan(0)
        )
        
        const {images, isLoading} = result.current

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()  

    })
    
})
