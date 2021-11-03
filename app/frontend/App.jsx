import React from "react";
import "babel-polyfill";
import { polyfill } from "es6-promise";
// import useFirebase  from './utils/firebaseConfig';
polyfill();

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Hovedside from "./Hovedside.jsx";
import LeggTilBevis from "./LeggTilBevis.jsx";
import useFirebase from "./utils/firebaseConfig.js";

const App = () => {
    useFirebase();
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Hovedside} />
                <Route exact path='/nytt-bevis' component={LeggTilBevis} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
