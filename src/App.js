import React from 'react';
import CarAnimation from "./Body/CarAnimation";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AboutCar from "./Body/AboutCar";
import CarState from "./context/CarInformation/CarState";
function App() {

  return (
      <CarState>
      <Router>
          <div>
              <Switch>
                  <Route exact path={'/'} component={CarAnimation}/>
                  <Route exact path={'/:id'} component={AboutCar}/>

              </Switch>
          </div>
      </Router>
      </CarState>


  );
}

export default App;
