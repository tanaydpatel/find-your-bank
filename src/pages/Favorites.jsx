import React from "react";
import { useSelector } from "react-redux";
import BanksList from "../components/BanksList";

function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  return (
    <>
      <h1>Favorites</h1>
      {favorites.length > 0 ? (
        <BanksList bankList={favorites} />
      ) : (
        <p>No favorite banks</p>
      )}
    </>
  );
}

export default Favorites;
