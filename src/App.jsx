import React, { useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import getBanksFromAPI from "./getBanks";
import updateFavorites from "./actionCreators/updateFavorites";

function App() {
  const searchParams = useSelector((state) => state.searchParams);
  // const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  useEffect(() => {
    getBanksFromAPI();
  }, [searchParams.city]);

  useEffect(() => {
    const myStorage = window.localStorage;
    const localfavorites = JSON.parse(myStorage.getItem("favorites"));

    if (localfavorites === null) {
      myStorage.setItem("favorites", JSON.stringify([]));
    } else {
      console.log("fav", localfavorites);
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
