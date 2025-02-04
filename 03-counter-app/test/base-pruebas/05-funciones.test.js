import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Prueba de funciones', () => {
    test('getUser debe retornar un obj', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()

        expect(testUser).toEqual(user)
    })

    test('getUsuarioActvio debe retornar un obj', () => {

        const name = 'roariel'

        const user = getUsuarioActivo(name)

        //expect(user).
        expect(user).toEqual({
            uid: 'ABC567',
            username: 'roariel'
        })
    })

})
