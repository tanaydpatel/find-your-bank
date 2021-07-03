import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GitHub } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    fontFamily: "Raleway, sans-serif",
    fontWeight: 700,
    color: "#ebebeb",
  },
}));

function Navbar() {
  const [activeRoute, setActiveRoute] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location.pathname]);
  const history = useHistory();
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Find your bank
        </Typography>

        <Button
          onClick={() => {
            history.push("/all-banks");
          }}
        >
          <span className={activeRoute === "/all-banks" ? "active" : null}>
            All banks
          </span>
        </Button>

        <Button
          onClick={() => {
            history.push("/favorites");
          }}
        >
          <span className={activeRoute === "/favorites" ? "active" : null}>
            Favorite banks
          </span>
        </Button>

        <IconButton aria-label="upload picture" component="span">
          <a
            target="_blank"
            href="https://github.com/tanaydpatel/groww-assignment"
            rel="noreferrer"
          >
            <GitHub />
          </a>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
