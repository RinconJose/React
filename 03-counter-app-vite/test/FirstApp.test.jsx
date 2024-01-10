import {render} from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('Pruebas en FirstApp', () => {
    // test('debe de hacer match con el snapshot', () => {
    //     const title = 'Hola, soy Goku';
    //     const {container} = render(<FirstApp title={title}/>);
    //     /* .toMatchSnapshot toma una fotografía del dom y crea una carpeta llamada snapshots la cual servirá para hacer las validaciones */
    //     expect( container ).toMatchSnapshot();
    // })
    test('Debe demostrar el titulo en un h1', () => {
        const title = 'Hola, soy Goku';
        const {container, getByText, getByTestId} = render(<FirstApp title={title}/>);
        /* .toBeTruthy verifica que el valor que l estamos pasando exista */

        /* Probando que exista una palabra */
        expect(getByText(title)).toBeTruthy();
        expect( getByTestId('test-title').innerHTML ).toContain(title)
        // expect( getByTestId('test-title').innerHTML ).toBe(title)

        // const h1 = container.querySelector('h1')
        /* Comparar el texto exactmente igual */
        // expect(h1.innerHTML).toBe( title )

        /* Comparar el contenido de la etiqueta */
        // expect(h1.innerHTML).toContain( title )
    })
    test('Debe de mostrar el subtitulo enviad por props', () => {
        const title = 'Hola, soy Goku';
        const subtitle = "Soy un subtitulo"
        const {getByText, getAllByText} = render(
            <FirstApp 
                title={title}
                subtitle={subtitle}
            />
        );

        // expect(getByText(subtitle)).toBeTruthy();
        expect(getAllByText(subtitle).length).toBe(2);
    })
})