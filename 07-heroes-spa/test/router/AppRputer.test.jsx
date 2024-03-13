import { MemoryRouter } from 'react-router-dom';
import { render,screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { AppRputer } from '../../src/router/AppRputer';

describe('Pruebas en el <AppRputer/>', () => {
    test('debe de mostrar el login si no está autenticado', () => {

        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRputer/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Login').length ).toBe(2);
    })

    test('Debe de mostrar el componente de marvel si está autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Jose',
                id: 'ABC123',
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRputer/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1);

    })
})