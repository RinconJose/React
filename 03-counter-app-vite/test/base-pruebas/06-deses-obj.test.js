import {usContext} from '../../src/base-pruebas/06-deses-obj'

describe('06-deses-obj', () => {
    const obj = {
        clave: 123456,
        nombre: 'Jose',
        edad: 32,
        rango: 'Front-end'
    }
    const textFuntion = usContext(obj)
    test('usContext debe pasar la prueba', () => {
        expect(textFuntion).toEqual({
            nombreClave: obj.clave,
            anios: obj.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            },
        })
    })
})