import { render,screen,fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SearchPage } from '../../../src/heroes/pages/SearchPage'

const mockUseNaavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNaavigate
}))

describe('Pruebas en <SearchPage/>', () => {

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrarse correctamente con valores por defecto', () => {
        const {container} = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        )
        // screen.debug()
        expect(container).toMatchSnapshot();
    })
    test('debe de mostrar a batman y el input del queryString', () => {
        const {container} = render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot();
        const input = screen.getByRole('textbox')
        expect( input.value ).toBe('batman');
        const img = screen.getByRole('img');
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg');
        const alert = screen.getByLabelText('alert-danger');
        // expect(alert.style)
        expect(alert.style.display).toBe('none')
    })
    test('Debe de mostrar un error si no se encuentra el hero (batman123)', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage/>
            </MemoryRouter>
        )
        const alert = screen.getByLabelText('alert-danger');
        expect(alert.style.display).toBe('')
        
    })
    test('Debe de llamr el navigate a la pantalla nueva', () => {

        const inputValue = 'superman';

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage/>
            </MemoryRouter>
        )
        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {name:'searchText', value: inputValue}})
        const form = screen.getByRole('form')
        fireEvent.submit(form)
        expect(mockUseNaavigate).toHaveBeenCalledWith(`?q=${inputValue}`)
    })
})