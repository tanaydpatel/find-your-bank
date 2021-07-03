import React from "react";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

function BanksList({ bankList }) {
  const loading = useSelector((state) => state.loading);

  return (
    <div>
      <Typography variant="h6" color="secondary" style={{ margin: "30px 0" }}>
        Banks list
      </Typography>
      <pre>THis is loading {JSON.stringify(loading)}</pre>
      <pre>{JSON.stringify(bankList, null, 2)}</pre>
    </div>
  );
}

export default BanksList;
