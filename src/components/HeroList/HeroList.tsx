import React from 'react';
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher';
import HeroCard from '../HeroCard/HeroCard';

interface HeroListProps {
    publisher: 'DC Comics' | 'Marvel Comics';
}

const HeroList = ({ publisher }: HeroListProps) => {

    const heroes = React.useMemo(() => getHeroByPublisher(publisher), [publisher]);
    console.log(`Heroes of publisher ${publisher}: `, heroes);

    return (
        <div
            className='grid grid-cols-4 gap-4 py-10 px-5'
            data-aos="zoom-in"
            data-aos-duration="500"
        >
            {heroes.map(hero => <HeroCard key={hero.id} superHero={hero} />)}
        </div>
    )
}

export default HeroList;