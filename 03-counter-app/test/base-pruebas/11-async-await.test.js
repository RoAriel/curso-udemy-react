import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Prueba en 11-async', () => {
  test('Debe retornar una URL', async () => {
    
    const url = await getImagen()

    expect(typeof url).toBe('string')
    
  })
  
})
