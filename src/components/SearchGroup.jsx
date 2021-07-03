import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";

function SearchGroup() {
  return (
    <>
      <FormControl
        variant="outlined"
        style={{ minWidth: 250, marginRight: "50px" }}
      >
        <InputLabel id="demo-simple-select-outlined-label">
          Select city
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Select city"
          value="banglore"
        >
          <MenuItem value={"mumbai"}>MUMBAI</MenuItem>
          <MenuItem value={"delhi"}>DELHI</MenuItem>
          <MenuItem value={"lucknow"}>LUCKNOW</MenuItem>
          <MenuItem value={"banglore"}>BANGALORE</MenuItem>
          <MenuItem value={"hyderabad"}>HYDERABAD</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        variant="outlined"
        style={{ minWidth: 250, marginRight: "50px" }}
      >
        <InputLabel id="demo-simple-select-outlined-label">
          Select Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
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
      <TextField
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
    </>
  );
}

export default SearchGroup;
