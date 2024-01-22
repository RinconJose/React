import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHook } from "../../src/03-example/MultipleCustomHook"
import { useCounter, useFetch } from "../../src/hooks";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en el MultipleCustomHook', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })

        render(<MultipleCustomHook/>);

        expect( screen.getByText('Loading...') );
        expect( screen.getByText('BrakingBad Quotes') );

        const nextButton = screen.getByRole('button', {name: 'Next qote'});
        expect(nextButton.disabled).toBeTruthy();

        // screen.debug();
    });

    test('Debe demostrar un quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Jose', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHook/>);
        expect( screen.getByText('Hola Mundo') ).toBeTruthy();
        expect( screen.getByText('Jose') ).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: 'Next qote'});
        expect(nextButton.disabled).toBeFalsy();


    })

    test('Debe de llamar la función de incrementar', () => {
        
        useFetch.mockReturnValue({
            data: [{ author: 'Jose', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHook/>);
        const nextButton = screen.getByRole('button', {name: 'Next qote'});
        fireEvent.click( nextButton );

        expect(mockIncrement).toHaveBeenCalled();



    })
})