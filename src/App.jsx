import React from "react";
import Dashboard from "./components/Dashboard";
import CardCategories from "./components/CardCategories";
import LastUser from "./components/LastUser";
import LastProduct from "./components/LastProduct";
import ProductList from "./components/ProductList";
import CardTotal from "./components/CardTotal";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Dashboard {...props} />} />
      <Route
        exact
        path="/CardTotal"
        render={(props) => <CardTotal {...props} />}
      />
      <Route
        exact
        path="/LastUser"
        render={(props) => <LastUser {...props} />}
      />
      <Route
        exact
        path="/LastProduct"
        render={(props) => <LastProduct {...props} />}
      />
            <Route
        exact
        path="/ProductList"
        render={(props) => <ProductList {...props} />}
      />
      <Route
        exact
        path="/CardCategories"
        render={(props) => <CardCategories {...props} />}
      />
    </Switch>
  );
}
