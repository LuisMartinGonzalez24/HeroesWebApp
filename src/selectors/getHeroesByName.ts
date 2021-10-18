import { heroes } from "../data/heroes"

export const getHeroesByName = (superHero: string) => {

    if (superHero === '') return [];
    superHero = superHero.toLocaleLowerCase();
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(superHero));        
}
