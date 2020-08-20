import React from 'react';
import CarAnimation from "./Body/CarAnimation";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
function App() {
  return (
      <Router>
          <div>
              <Switch>
                  <Route exact path={'/'} component={CarAnimation}/>
                  <Route exact path={'/:id'} component={CarAnimation}/>

              </Switch>
          </div>
      </Router>


  );
}

export default App;
