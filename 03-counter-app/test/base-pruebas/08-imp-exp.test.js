import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('Pruebas en 08-imp-exp.test', () => {
  test('Test getHeroById ', () => {

    const id= 1

    const hero = getHeroeById(id)

    expect(hero).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC'
    })

  })

  test('Test getHeroById id no existe undefine', () => {

    const id= 100

    const hero = getHeroeById(id)

    expect(hero).toBeFalsy()

  })

  test('Arreglo de Heroes solo con owner DC', () => {
    const owner = 'DC'

    const heroes = getHeroesByOwner(owner)

    expect(heroes).toHaveLength(3)
    
    expect(heroes).toEqual(heroes.filter(h => h.owner===owner))
    expect(heroes).toEqual([
        {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },
        {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        }
    ])
  })

  test('Arreglo de Heroes solo con owner Marvel', () => {
    const owner = 'Marvel'

    const heroes = getHeroesByOwner(owner)

    expect(heroes).toHaveLength(2)
    
  })

  
})
