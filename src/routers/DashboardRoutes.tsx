import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Navbar from '../components/NavbarComponent/Navbar';
import MarvelScreen from '../pages/Marvel/MarvelScreen';
import HeroScreen from '../pages/Hero/HeroScreen';
import DCScreen from '../pages/DC/DCScreen';
import SearchScreen from '../pages/SearchScreen/SearchScreen';

const DashboardRoutes = () => {
    return (
        <div>
            <Navbar />

            <div className='container'>
                <Switch>
                    <Route exact path='/dc' component={DCScreen} />
                    <Route exact path='/marvel' component={MarvelScreen} />
                    <Route exact path='/hero/:heroId' component={HeroScreen} />
                    <Route exact path='/search' component={SearchScreen} />
                    <Redirect to='/marvel' />
                </Switch>
            </div>
        </div>
    )
}

export default DashboardRoutes;