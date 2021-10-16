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
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={form.searchText}
                            onChange={(e) => onChange('searchText', e.target.value)}
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">

                    <h4> Results </h4>
                    <hr />

                    {
                        (initialStateText === '')
                        &&
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }

                    {
                        (initialStateText !== '' && heroesFiltered.length === 0)
                        &&
                        <div className="alert alert-danger">
                            There is no a hero with {q}
                        </div>
                    }

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
        </div>
    )
}

export default SearchScreen;