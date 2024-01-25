import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context";


describe('Pruebas en <LoginPage />', () => {

    test('debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{user:null}}>
                <LoginPage/>
            </UserContext.Provider>
        )

        const pre = screen.getByLabelText('pre');
        expect(pre.innerHTML).toBe('null');
    });

    test('debe de llaar el setUser cuando se hace click en el boton', () => {

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{user:null, setUser:setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
        )

        const button = screen.getByLabelText('button');
        fireEvent.click(button);
        expect(setUserMock).toHaveBeenCalledWith({id: 123, name: 'Jose', email: 'jose@jose.com'});
        
    });
});