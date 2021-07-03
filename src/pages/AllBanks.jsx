import React from "react";
import BanksList from "../components/BanksList";
import SearchGroup from "../components/SearchGroup";
import { Divider } from "@material-ui/core";

function AllBanks() {
  return (
    <>
      <SearchGroup />
      <Divider />
      <BanksList />
    </>
  );
}

export default AllBanks;
