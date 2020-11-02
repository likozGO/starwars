import React, {useState} from 'react';
import PlanetList from "./PlatetList/PlanetList";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PlanetArticle from "./PlanetArticle/PlanetArticle";
import ErrorPage from "./EternalComponents/ErrorPage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" children={<PlanetList />}/>
                <Route path="/planets/:id" component={() => <PlanetArticle />}/>
                <Route component={() => <ErrorPage />}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
