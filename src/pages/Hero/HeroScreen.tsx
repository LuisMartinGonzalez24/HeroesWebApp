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
            <div className="grid grid-cols-2 gap-4 py-4" data-aos="fade-right" data-aos-duration="700">
                <div className="flex justify-center">
                    <div className='overflow-hidden rounded-2xl shadow-xl'>
                        <img
                            src={`../assets/images/${heroId}.jpg`}
                            alt={hero.superhero}
                            className=''
                        />
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-duration="700">
                    <h3 className='text-4xl font-bold mb-5'> {hero.superhero} </h3>
                    <ul className="">
                        <li className="text-2xl mb-2"> <b> Alter ego: </b> {hero.alter_ego} </li>
                        <li className="text-2xl mb-2"> <b> Publisher: </b> {hero.publisher} </li>
                        <li className="text-2xl mb-2"> <b> First appearance: </b> {hero.first_appearance} </li>
                    </ul>

                    <p className='text-2xl font-medium mb-2'> Characters: </p>
                    <p className='text-xl mb-2'> {hero.characters} </p>

                    <button
                        className="py-2 mt-4 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
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