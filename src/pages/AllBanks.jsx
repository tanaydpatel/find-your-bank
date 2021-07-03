import React from "react";
import BanksList from "../components/BanksList";
import SearchGroup from "../components/SearchGroup";
import { Divider } from "@material-ui/core";
import { useSelector } from "react-redux";

function AllBanks() {
  const banks = useSelector((state) => state.allBanks);

  return (
    <>
      <h1>All Banks</h1>
      <SearchGroup />
      <Divider />
      <BanksList bankList={banks} />
    </>
  );
}

export default AllBanks;
