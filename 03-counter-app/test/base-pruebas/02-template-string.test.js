import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas en 02-template-string', () => {
  test('getSaludo deber responder Hola Rodrigo', () => {
    const name = 'Rodrigo'

    const msj = getSaludo('Rodrigo')

    expect(msj).toBe('Hola Rodrigo')
  })
  
})
