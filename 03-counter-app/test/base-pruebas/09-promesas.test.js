import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('Pruebas en 09-promesas', () => {
  test('getHeroById tiene que retornar un heroe', (done) => {
    const id = 1

    getHeroeByIdAsync(id).then(hero =>{
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
        done()
    })

})

    test('getHeroById tiene que retornar error si heroe no existe', (done) => {
        const id = 100
    
        getHeroeByIdAsync(id)
        .catch(error =>{
            expect(error).toBe(`No se pudo encontrar el héroe con ID: ${id}`)
            
            done()
        })
    })

  })


