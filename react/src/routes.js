import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Header from './layout/Header';
import Profile from './pages/profile';

export default function Routes(){
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path = "/" exact component ={Home}/>
                <Route path = "/profile" component = {Profile}/>
            </Switch>
        </BrowserRouter>
    )
}