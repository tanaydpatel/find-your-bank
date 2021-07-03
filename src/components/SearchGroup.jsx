import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";

function SearchGroup() {
  return (
    <>
      <Typography variant="h6" style={{ marginBottom: "30px" }}>
        Search Parameters
      </Typography>
      <Grid container spacing={5} style={{ marginBottom: "5px" }}>
        <Grid item lg={3} md={4} sm={4} xs={12}>
          <FormControl
            variant="outlined"
            style={{ minWidth: 250, marginRight: "50px" }}
          >
            <InputLabel id="select-city-label">Select city</InputLabel>
            <Select
              labelId="select-city-label"
              id="select-city"
              label="Select city"
              value="mumbai"
            >
              <MenuItem value={"mumbai"}>MUMBAI</MenuItem>
              <MenuItem value={"delhi"}>DELHI</MenuItem>
              <MenuItem value={"lucknow"}>LUCKNOW</MenuItem>
              <MenuItem value={"banglore"}>BANGALORE</MenuItem>
              <MenuItem value={"hyderabad"}>HYDERABAD</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={3} md={4} sm={4} xs={12}>
          <FormControl
            variant="outlined"
            style={{ minWidth: 250, marginRight: "50px" }}
          >
            <InputLabel id="select-category-label">Select Category</InputLabel>
            <Select
              labelId="select-category-label"
              id="select-category"
              label="Select category"
            >
              <MenuItem value="">
                <em>Select category</em>
              </MenuItem>
              <MenuItem value={"ifsc"}>IFSC</MenuItem>
              <MenuItem value={"branch"}>Branch</MenuItem>
              <MenuItem value={"branch-name"}>Branch name</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <TextField
            className="tooltip"
            disabled
            fullWidth
            label="Search"
            id="outlined-start-adornment"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default SearchGroup;
