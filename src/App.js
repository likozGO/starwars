import React, {useState} from 'react';
import PlanetList from "./PlatetList/PlanetList";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PlanetArticle from "./PlanetArticle/PlanetArticle";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" children={<PlanetList />}/>
                <Route path="/:id" component={() => <PlanetArticle />}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
