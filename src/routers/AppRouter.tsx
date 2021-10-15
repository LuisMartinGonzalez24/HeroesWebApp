import React, { useContext } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import LoginScreen from '../pages/auth/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import { ProtectedRoute } from './ProtectedRoute';
import { AuthContext } from '../context/auth/AuthContext';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {

    const { authState: { isLogged } } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path='/login'
                        component={LoginScreen}
                        isLogged={isLogged}
                    />
                    <ProtectedRoute
                        path='/'
                        component={DashboardRoutes}
                        isLogged={isLogged}
                    />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;