import React from 'react';
import HeroList from '../../components/HeroList/HeroList';

const DCScreen = () => {
    return (
        <div>
            <h1>DC Screen</h1>
            <hr />

            <HeroList publisher={'DC Comics'} />
        </div>
    )
}

export default DCScreen;