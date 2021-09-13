import React from "react";
import Dashboard from "./components/Dashboard";
import CardCategories from "./components/CardCategories";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Dashboard {...props} />} />
      <Route
        exact
        path="/CardCategories"
        render={(props) => <CardCategories {...props} />}
      />
    </Switch>
  );
}
