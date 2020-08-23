import React from 'react';
import CarAnimation from "./Body/Car Animation/CarAnimation";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AboutCar from "./Body/About Car/AboutCar";
import CarState from "./context/CarInformation/CarState";
import AlertState from "./context/alert/AlertState";
import Alerts from "./Body/Error/Alerts";

function App() {

    return (
        <CarState>
            <AlertState>
                <Router>
                    <div>
                        <Alerts/>
                        <Switch>
                            <Route exact path={'/'} component={CarAnimation}/>
                            <Route exact path={'/carInformation'} component={AboutCar}/>

                        </Switch>
                    </div>
                </Router>
            </AlertState>
      </CarState>


  );
}

export default App;
