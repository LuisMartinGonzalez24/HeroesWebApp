import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

type PublicRouteProps = {
    path: string;
    isLogged: boolean;
} & RouteProps;

export const PublicRoute = ({ isLogged, path, ...restProps }: PublicRouteProps) => {
    if (isLogged === false) {
        return <Route path={path} {...restProps} />;
    } else {
        return <Redirect to={'/'} />;;
    }
};