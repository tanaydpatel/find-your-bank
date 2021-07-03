import React from "react";
import Pagination from "@material-ui/lab/Pagination";

function PaginationComponent({ banksPerPage, totalBanks, paginate }) {
  const count = Math.ceil(totalBanks / banksPerPage);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      <Pagination
        count={count}
        color="primary"
        onChange={(event, value) => {
          paginate(value);
        }}
      />
    </div>
  );
}

export default PaginationComponent;
