import React from 'react'
import { RouteComponentProps, Redirect } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { getHeroById } from '../../selectors/getHeroById';

AOS.init();

interface RouteConfig {
    heroId: string;
}

interface HeroScreenProps extends RouteComponentProps<RouteConfig> { }

const HeroScreen = (props: HeroScreenProps) => {    
    

    console.log('Me volvi a renderizar :(');    
    const { match, history } = props;
    const { heroId } = match.params;

    const hero = React.useMemo(() => getHeroById(heroId), [heroId]);

    if (hero === null || hero === undefined) return <Redirect to='/' />

    const handleReturn = () => {

        if (history.length <= 2) {
            history.push(hero.publisher === 'DC Comics' ? '/dc' : '/marvel');
        } else {
            history.goBack();
        }

    }

    console.log('Id of hero: ', heroId)

    return (
        <div className="row mt-5">
            <div className="col-4" data-aos="fade-right" data-aos-duration="700">
                <img
                    src={`../assets/images/${heroId}.jpg`}
                    alt={hero.superhero}
                    className='img-thumbnail'                          
                />
            </div>

            <div className="col-8" data-aos="fade-left" data-aos-duration="700">
                <h3> {hero.superhero} </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> {hero.alter_ego} </li>
                    <li className="list-group-item"> <b> Publisher: </b> {hero.publisher} </li>
                    <li className="list-group-item"> <b> First appearance: </b> {hero.first_appearance} </li>
                </ul>

                <h5> Characters </h5>
                <p> {hero.characters} </p>

                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Return
                </button>

            </div>

        </div>
    )
}

export default HeroScreen;