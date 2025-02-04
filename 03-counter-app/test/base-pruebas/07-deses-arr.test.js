import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Prueba en 07', () => {
  test('Debe de retornar un string y un nro', () => {
    
    const [letras, numeros] = retornaArreglo()
    
    expect(letras).toBe('ABC')
    expect(numeros).toBe(123)

    expect(typeof letras).toBe('string')
    expect(typeof numeros).toBe('number')

    expect(letras).toEqual(expect.any(String))
    
  })
  
})
