import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./css/styles.css";
import AllBanks from "./pages/AllBanks";
import BankDetails from "./pages/BankDetails";
import Favorites from "./pages/Favorites";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Switch>
              <Route path="/all-banks">
                <AllBanks />
              </Route>
              <Route path="/bank-details/:id">
                <BankDetails />
              </Route>
              <Route path="/favorites">
                <Favorites />
              </Route>
              <Route
                exact
                path="/"
                render={() => {
                  return <Redirect to="/all-banks" />;
                }}
              />
            </Switch>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
