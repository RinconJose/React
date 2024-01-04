import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {
    test('getUSer debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser()
        expect( testUser ).toEqual( user )
    })

    test('getUsuarioAtivo debe de retornar un objeto', () => {
        const name = 'José';
        const user = getUsuarioActivo( name )
        expect( user ).toEqual({
            uid: 'ABC567',
            username: name
        })
    })
})