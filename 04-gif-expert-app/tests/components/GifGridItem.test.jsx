import { render, screen } from '@testing-library/react';
import { GifGridItem } from '../../src/components/GifGridItem';

describe('Pruebas en GifGridItem', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Titulo y url obligatorias', () => {
        const {container} = render(<GifGridItem title={title} url={url} />)
        expect( container ).toMatchSnapshot();
    })

    test('Debe de mostrar la imagen conel url y alt indicado', () => {
        render(<GifGridItem title={title} url={url} />)
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe(url);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('Debe de mostrar el título en el componente', () => {
        render(<GifGridItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy()
    })
})