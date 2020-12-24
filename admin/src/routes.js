import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import React from 'react';

import Site from './components/Site';


const routes = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Site}/>

            </Switch>
        </div>
    </Router>
);

export default routes;