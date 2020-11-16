import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Adm_Home from './pages/adm/Adm_Home'
import Register_Trip from './pages/adm/Register_Trip'
import Adm_Owner from './pages/adm/Adm_Owner'
import Listed_Trips from './pages/adm/Listed_Trips'
import Register_Owner from './pages/adm/Register_Owner';

function Routes() {
    return ( 
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />

                {/*-------ADM------*/}
                <Route path="/adm_home" component={Adm_Home} />
                <Route path="/register_trip" component={Register_Trip} />
                <Route path="/register_owner" component={Register_Owner} />
                <Route path="/adm_owner" component={Adm_Owner} />
                <Route path="/listed_trips" component={Listed_Trips} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;