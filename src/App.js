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

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/places/new" exact component={NewPlace} />
          <Route path="/" exact component={Users} />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
