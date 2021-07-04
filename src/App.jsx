import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import AllBanks from "./pages/AllBanks";
import BankDetails from "./pages/BankDetails";
import Favorites from "./pages/Favorites";
import getBanksFromAPI from "./getBanks";
import updateFavorites from "./actionCreators/updateFavorites";
import "./css/styles.css";

function App() {
  const searchParams = useSelector((state) => state.searchParams);
  const dispatch = useDispatch();

  // get data from API/cache when ever the city is changed
  useEffect(() => {
    getBanksFromAPI();
  }, [searchParams.city]);

  // load the favorite banks from localStorage into the redux store
  useEffect(() => {
    const myStorage = window.localStorage;
    const localfavorites = JSON.parse(myStorage.getItem("favorites"));

    if (localfavorites === null) {
      myStorage.setItem("favorites", JSON.stringify([]));
    } else {
      dispatch(updateFavorites(localfavorites));
    }
  }, [dispatch]);

  return (
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
  );
}

export default App;
