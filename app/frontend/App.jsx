import React from "react";
import "babel-polyfill";
import { polyfill } from "es6-promise";
// import useFirebase  from './utils/firebaseConfig';
polyfill();

import { HashRouter, Route, Switch } from "react-router-dom";
import Hovedside from "./Hovedside.jsx";
import LeggTilBevis from "./LeggTilBevis.jsx";

class App extends React.Component {
    // useFirebase();
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Hovedside} />
                    <Route exact path='/nytt-bevis' component={LeggTilBevis} />
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
