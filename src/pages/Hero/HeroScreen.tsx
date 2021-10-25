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
        <div className="container mx-auto ">
            <div className="grid grid-cols-2 gap-4 py-4">
                <div className="flex justify-center" data-aos="fade-right" data-aos-duration="700">
                    <div className='overflow-hidden rounded-2xl shadow-xl'>
                        <img
                            src={`../assets/images/${heroId}.jpg`}
                            alt={hero.superhero}
                            className=''
                        />
                    </div>
                </div>

                <div className="bg-gray-700 " data-aos="fade-left" data-aos-duration="700">
                    <h3> {hero.superhero} </h3>
                    <ul className="">
                        <li className="list-group-item"> <b> Alter ego: </b> {hero.alter_ego} </li>
                        <li className="list-group-item"> <b> Publisher: </b> {hero.publisher} </li>
                        <li className="list-group-item"> <b> First appearance: </b> {hero.first_appearance} </li>
                    </ul>

                    <h5> Characters </h5>
                    <p> {hero.characters} </p>

                    <button
                        className=""
                        onClick={handleReturn}
                    >
                        Return
                    </button>

                </div>
            </div>
        </div>
    )
}

export default HeroScreen;