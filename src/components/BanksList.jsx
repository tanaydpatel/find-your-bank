import React from "react";
import {
  TableContainer,
  Table,
  Checkbox,
  TableHead,
  Paper,
  TableCell,
  TableRow,
  Typography,
  TableBody,
  CircularProgress,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Star, StarBorder } from "@material-ui/icons";
import {
  addFavorites,
  removeFavorites,
} from "../actionCreators/updateFavorites";
import { useHistory } from "react-router-dom";

function BanksList({ bankList }) {
  console.log("in bank list", bankList);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      <TableContainer component={Paper} style={{ border: "1px solid #00d09c" }}>
        <Table style={{ minWidht: "650px" }} aria-label="simple table">
          <TableHead style={{ backgroundColor: "#00d09c" }}>
            <TableRow>
              <TableCell>Fav</TableCell>
              <TableCell>BANK</TableCell>
              <TableCell align="right">IFSC</TableCell>
              <TableCell align="right">BRANCH</TableCell>
              <TableCell align="right">BANK ID</TableCell>
              <TableCell align="right">ADDRESS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <CircularProgress />
                  </div>
                </TableCell>
              </TableRow>
            ) : bankList.length > 0 ? (
              bankList.map((bank) => (
                <TableRow
                  key={bank.ifsc}
                  className="tableRow"
                  onClick={(e) => {
                    if (e.target.className.includes("redirect")) {
                      history.push("/bank-details/" + bank.ifsc);
                    }
                  }}
                >
                  <TableCell>
                    <Checkbox
                      onChange={(e) => {
                        if (e.target.checked) {
                          dispatch(addFavorites(favorites, bank));
                        } else {
                          dispatch(removeFavorites(favorites, bank));
                        }
                      }}
                      checked={favorites.some(
                        (item) => JSON.stringify(item) === JSON.stringify(bank)
                      )}
                      color="primary"
                      icon={<StarBorder />}
                      checkedIcon={<Star />}
                    />
                  </TableCell>

                  <TableCell align="left" width="200" className="redirect">
                    {bank.bank_name}
                  </TableCell>
                  <TableCell align="right" width="150" className="redirect">
                    {bank.ifsc}
                  </TableCell>
                  <TableCell align="right" width="350" className="redirect">
                    {bank.branch}
                  </TableCell>
                  <TableCell align="right" width="100" className="redirect">
                    {bank.bank_id}
                  </TableCell>
                  <TableCell align="right" className="redirect">
                    {bank.address}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6">ERROR</Typography>
                    <p>{error.msg}</p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default BanksList;
