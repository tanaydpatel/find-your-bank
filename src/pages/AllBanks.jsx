/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import BanksList from "../components/BanksList";
import SearchGroup from "../components/SearchGroup";
import { Divider, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import PaginationComponent from "../components/Pagination";

function AllBanks() {
  const banks = useSelector((state) => state.allBanks);
  // const searchParams = useSelector((state) => state.searchParams);
  const [currentPage, setCurrentPage] = useState(1);
  const [banksPerPage, setbanksPerPage] = useState(10);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  let indexOfLastBank = currentPage * banksPerPage;
  let indexOfFirstBank = indexOfLastBank - banksPerPage;
  let currentBank = banks.slice(indexOfFirstBank, indexOfLastBank);

  useEffect(() => {
    indexOfLastBank = currentPage * banksPerPage;
    indexOfFirstBank = indexOfLastBank - banksPerPage;
    currentBank = banks.slice(indexOfFirstBank, indexOfLastBank);
  }, [banksPerPage]);

  return (
    <>
      <h1>All Banks</h1>
      <SearchGroup />
      <Divider />
      <Typography variant="h6" color="secondary" style={{ margin: "30px 0" }}>
        Banks list
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "end",
        }}
      >
        <div>
          Showing{" "}
          <select
            value={banksPerPage}
            onChange={(e) => {
              setbanksPerPage(e.target.value);
            }}
            onBlur={(e) => {
              setbanksPerPage(e.target.value);
            }}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
            <option value="150">150</option>
            <option value="200">200</option>
          </select>{" "}
          banks /page
        </div>
      </div>
      <BanksList bankList={currentBank} />

      <PaginationComponent
        banksPerPage={banksPerPage}
        totalBanks={banks.length}
        paginate={paginate}
      />
    </>
  );
}

export default AllBanks;
