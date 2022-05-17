import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/login';
import Home from '../pages/home';

function Router() {
    return (
        <Switch>
            <Route exact path='/login'>
                <Login />
            </Route>
            <Route path='/home'>
                <Home />
            </Route>
            <Redirect to='/home' />
        </Switch>
    )
}

export default Router;