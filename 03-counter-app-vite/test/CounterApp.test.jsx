import {fireEvent, render,screen} from '@testing-library/react'
import { CounterApp } from '../src/CounterApp'


describe('Pruebas en CounterApp', () => {

    const initialValue = 10;

    test('debe hacer match con el snapshot', () => {
        const {container} = render(<CounterApp value={initialValue} />);
        expect(container).toMatchSnapshot();
    })

    test('debe demostrar el valor inicial de 100<CounterApp value={100}>', () => {
        render(<CounterApp value={100} />)
        expect(screen.getByText(100)).toBeTruthy();
    })

    test('debe de incrementar con el botón +1', () => {
        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('+1'));
        expect( ( screen.getByText('11') ) ).toBeTruthy()
    })

    test('debe de decrementar con el botón -1', () => {
        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('-1'));
        expect( ( screen.getByText('9') ) ).toBeTruthy()
    })

    test('debe funionar el btn de reset', () => {
        render(<CounterApp value={355} />)
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
        // fireEvent.click(screen.getByText('Reset')); // Detectar el btn por el contenido del btn

        expect( screen.getByText( 355 ) ).toBeTruthy();

    })
})