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
import UpdatePlace from "./places/pages/UpdatePlace";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/places/new" exact component={NewPlace} />
          <Route path="/places/:placeId" exact component={UpdatePlace} />
          <Route path="/:userId/places" exact component={UserPlaces} />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
