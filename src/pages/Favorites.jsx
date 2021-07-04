import React from "react";
import { useSelector } from "react-redux";
import BanksList from "../components/BanksList";
import { Divider } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

function Favorites() {
  // load favorites from store
  const favorites = useSelector((state) => state.favorites);
  const history = useHistory();

  return (
    <>
      <h1>Favorites</h1>
      <Divider style={{ marginBottom: "40px" }} />
      <Button
        startIcon={<ArrowBack />}
        style={{ marginBottom: "20px" }}
        color="secondary"
        onClick={() => {
          history.goBack();
        }}
      >
        Go back
      </Button>
      {/* give complete list of favoite banks as input to banklist component */}
      {favorites.length > 0 ? (
        <BanksList bankList={favorites} />
      ) : (
        <p>No favorite banks</p>
      )}
    </>
  );
}

export default Favorites;
