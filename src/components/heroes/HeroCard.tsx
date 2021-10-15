import React from 'react'
import { Link } from 'react-router-dom';
import { Hero } from '../../data/heroes';
import './heroCardStyles.css';

interface HeroCardProps {
    superHero: Hero
}

const HeroCard = ({ superHero }: HeroCardProps) => {

    const { id, superhero, publisher, first_appearance, alter_ego, characters } = superHero;

    return (
        <Link to={`./hero/${id}`} className="my-card">
            <img src={`./assets/images/${id}.jpg`} className="img img-responsive" alt={superhero} />
            <div className="profile-name">{superhero}</div>
            <div className="profile-position">{alter_ego}</div>
            <div className="profile-overview">
                <div className="profile-overview">
                    <div className="row">
                        <div className="col-ms-4">
                            <h3>{publisher}</h3>
                            <p>Primera aparición: <br />{first_appearance}</p>
                            {
                                (alter_ego !== characters)
                                && <p>{characters}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default HeroCard;