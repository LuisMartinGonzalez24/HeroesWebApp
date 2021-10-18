import React from 'react'
import { Link } from 'react-router-dom';
import { Hero } from '../../data/heroes';
import styles from './heroCardStyles.module.css';

interface HeroCardProps {
    superHero: Hero
}

const HeroCard = ({ superHero }: HeroCardProps) => {

    const { id, superhero, publisher, first_appearance, alter_ego, characters } = superHero;

    return (
        <div className=" overflow-hidden bg-white rounded-2xl shadow-lg">
            <img className="object-cover object-center w-full h-96" src={`../assets/images/${id}.jpg`} alt="avatar" />

            <div className="flex items-center px-6 py-3 bg-gray-900">
                <svg className="w-6 h-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z" /></svg>

                <p className="mx-3 text-lg font-semibold text-white">{superhero}</p>
            </div>

            <div className="px-6 py-4 h-1/3">
                <div className='flex-1'>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">{characters}</p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">{first_appearance}</p>
                </div>

                <button type="button" className="py-2 mt-4 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    See Hero
                    <svg className='animate-pulse' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z" /><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" fill="rgba(255,255,255,1)" /></svg>
                </button>

            </div>
        </div>

    )
}

export default HeroCard;