import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import SetStore from '../pages/home/component/btnSetStore';
import Test from '../pages/home/component/btnShowKoa';

function Router() {
    return (
        <Switch>
            <Route exact path='/home'>
                <Test/>
            </Route>
            <Route exact path='/home/setstore'>
                <SetStore/>
            </Route>
            <Redirect to='/home' />
        </Switch>
    )
}

export default Router;