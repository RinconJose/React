import { MemoryRouter } from 'react-router-dom'
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe('PRuebas en el <PrivateRoute/>', () => {
    test('debe de mostrar el children si está autenticado', () => {

        Storage.prototype.setItem = jest.fn(); // Evaluar el localStorage hay que sobreescribir el local storage con el prototype

        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'Jose Rincon'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Ruta privada') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/search?q=batman');
    });

})