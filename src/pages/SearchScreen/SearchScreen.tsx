import React from 'react'
import { RouteComponentProps } from 'react-router';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import HeroCard from '../../components/HeroCard/HeroCard';

interface SearchScreenProps extends RouteComponentProps { }

const SearchScreen = (props: SearchScreenProps) => {

    const { history, location } = props;
    const { q } = queryString.parse(location.search);
    let initialStateText: string;

    if (
        q === null ||
        q === undefined ||
        Array.isArray(q)
    ) {
        initialStateText = '';
    } else {
        initialStateText = q;
    }

    const { form, onChange } = useForm({
        searchText: initialStateText
    });

    const heroesFiltered = React.useMemo(() => getHeroesByName(initialStateText), [initialStateText]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        history.push(`?q=${form.searchText}`);
    }

    return (
        <div className='container mx-auto'>

            <form onSubmit={handleSearch} className='flex flex-row items-center'>
                <input
                    type="text"
                    placeholder="Find your hero"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 py-2 px-4 my-5 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent;"
                    name="searchText"
                    autoComplete="off"
                    value={form.searchText}
                    onChange={(e) => onChange('searchText', e.target.value)}
                />

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 mx-5 w-44"
                >
                    Search
                </button>
            </form>

            {heroesFiltered.length > 0 && (
                <>
                    <p className='text-2xl'>Results:</p>
                    <hr />
                </>
            )}

            {
                (initialStateText === '')
                &&
                <div className='flex justify-center p-4'>
                    <div className="flex flex-row items-center bg-blue-200 p-5 rounded border-b-2 border-blue-300">
                        <div className=" flex items-center bg-blue-100 border-2 border-blue-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
                            <span className="text-blue-500">
                                <svg fill="currentColor"
                                    viewBox="0 0 20 20"
                                    className="h-6 w-6">
                                    <path fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </span>
                        </div>
                        <div className="ml-4">
                            <div className="alert-description text-xl text-blue-600">
                                Search your favorite Hero!
                            </div>
                        </div>
                    </div>
                </div>
            }

            {
                (initialStateText !== '' && heroesFiltered.length === 0)
                &&
                <div className='flex justify-center p-4'>
                    <div className="flex flex-row items-center bg-blue-200 p-5 rounded border-b-2 border-blue-300">
                        <div className=" flex items-center bg-blue-100 border-2 border-blue-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
                            <span className="text-blue-500">
                                <svg fill="currentColor"
                                    viewBox="0 0 20 20"
                                    className="h-6 w-6">
                                    <path fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </span>
                        </div>
                        <div className="ml-4">
                            <div className="alert-description text-xl text-blue-600">
                                No heros with: {q}
                            </div>
                        </div>
                    </div>
                </div>
            }

            <div className="mt-10 grid grid-cols-4 gap-3">
                {
                    heroesFiltered.map(hero => (
                        <HeroCard
                            key={hero.id}
                            superHero={hero}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default SearchScreen;