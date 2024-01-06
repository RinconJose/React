import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas 08-imp-exp', ()=> {
    test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'})
    })
    test('getHeroeById debe retornar undefined si no existe el ID', () => {
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy()
    })
    test('getHeroesByOwner debe retornar un rreglo con los héroes de DC', () => {
        const owner = 'DC'
        const arrHero = getHeroesByOwner(owner);
        
        expect(arrHero.length).toBe(3)
        expect(arrHero).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
    })
    test('getHeroesByOwner debe retornar un rreglo con los héroes de Marvel', () => {
        const owner = 'Marvel'
        const arrHero = getHeroesByOwner(owner);
        
        expect(arrHero.length).toBe(2)
        expect(arrHero).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
    })
})