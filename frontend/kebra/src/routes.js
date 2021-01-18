import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Marketplace from './pages/Marketplace';
import Eventos from './pages/Eventos';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />

                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
                <Route path="/marketplace" component={Marketplace} />
                <Route path="/eventos" component={Eventos} />
            </Switch>
        </BrowserRouter>
    );
}
