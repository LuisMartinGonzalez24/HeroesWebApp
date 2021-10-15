import React from 'react';
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher';
import HeroCard from './HeroCard';

interface HeroListProps {
    publisher: 'DC Comics' | 'Marvel Comics';
}

const HeroList = ({ publisher }: HeroListProps) => {

    const heroes = React.useMemo(() => getHeroByPublisher(publisher), [publisher]);
    console.log(`Heroes of publisher ${publisher}: `, heroes);

    return (
        <div
            className='card-group'
            data-aos="zoom-in"
            data-aos-duration="500"
        >
            {heroes.map(hero => <HeroCard key={hero.id} superHero={hero} />)}
        </div>
    )
}

export default HeroList;