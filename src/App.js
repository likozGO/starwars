import React from 'react';
import PlanetList from "./PlatetList/PlanetList";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PlanetCard from "./PlanetCard/PlanetCard";

function App() {
  return (
      <BrowserRouter >
          <Switch>
              <Route exact path="/" children={<PlanetList />} />
              <Route path="/planet/:id" children={<PlanetCard />} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
