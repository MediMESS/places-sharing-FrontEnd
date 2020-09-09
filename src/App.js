import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import NewPlace from "./places/pages/NewPlace";
import Users from "./user/pages/Users";
import UserPlaces from "./places/pages/UserPlaces";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>

          <Route path="/:userId/places" component={UserPlaces} />
          <Route path="/" exact>
            <Users />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
