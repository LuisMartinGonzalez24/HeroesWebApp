import { heroes, Hero } from '../data/heroes';

type TypePublisher = 'DC Comics' | 'Marvel Comics';

export const getHeroByPublisher = (publisher: TypePublisher): Hero[] => {

    if (publisher === 'DC Comics' || publisher === 'Marvel Comics') {
        return heroes.filter(hero => hero.publisher === publisher);
    } else {
        throw new Error(`Publisher de tipo: "${publisher}" no es aceptado.`);
    }
    
};
