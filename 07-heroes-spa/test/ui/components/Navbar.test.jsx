import { MemoryRouter, useNavigate } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from '../../../src/ui/components/Navbar';

const mockUseNaavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNaavigate
}))

describe('Pruebas en el componente de <Navbar/>', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Jose',
            id: 'ABC123',
        },
        logout: jest.fn() // Si queremos que algo se llame ó queremos llamar una función utilizamos el jest.fn()
    }

    beforeEach(() => jest.clearAllMocks()); // Siempre que utilicemos un la función de jest debemos llamar esta función para que las funciones siempre esten limpias.

    // Evaluamos si un nombre existe
    test('debe mostrar el nombre del usuario', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect( screen.getByText('Jose') ).toBeTruthy();
    })
    test('debe llamar el logout y navigate cuando se hace clicl en el botton', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn )

        expect(contextValue.logout).toHaveBeenCalled()
        expect(mockUseNaavigate).toHaveBeenCalledWith('/login', {'replace':true})
    })
})