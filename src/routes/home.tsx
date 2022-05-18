import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Test from '../pages/home/component/btnShowKoa';

function Router() {
    return (
        <Switch>
            <Route exact path='/home'>
                <div>
                    12sdf3
                    <Test/>
                </div>
            </Route>
            <Route exact path='/home/2452'>
                <div>2452</div>
            </Route>
            <Redirect to='/home' />
        </Switch>
    )
}

export default Router;