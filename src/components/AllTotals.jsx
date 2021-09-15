import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CardTotal from "./CardTotal";

const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
  },
  colorText: {
    color: "#FFFFFF",
  },

  container: {
    paddingTop: theme.spacing(4),
  },

  fixedHeight: {
    [theme.breakpoints.down("sm")]: {
      height: 115,
    },
    [theme.breakpoints.up("md")]: {
      height: 130,
    },
  },

  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },

  totals: {
    borderRadius: 10,
    backgroundSize: "200%",
    boxShadow: "0 3px 5px 2px rgba(025, 015, 020, .3)",
    transition: "0.6s",
    backgroundImage: "linear-gradient(45deg, #3f50b5, #BBDEFB, #0D47A1)",
    "&:hover": {
      backgroundPosition: "right",
    },
    alignItems: "center",
  },


}));

export default function AllTotals() {
  const classes = useStyles();

  const [productCount, setProductCount] = useState([]);
  const [categoriesCount, setCategoriesCount] = useState([]);
  const [userCount, setUserCount] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProductCount(data.products);
        setCategoriesCount(data.categories);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUserCount(data.meta);
        console.log("Es por acá")
      });
  }, []);

  let cardTotalProps = [productCount, userCount, categoriesCount];

  const fixedHeightPaperTotal = clsx(
    classes.paper,
    classes.totals,
    classes.fixedHeight
  );

  return (
    <React.Fragment>
      {cardTotalProps.map((card, i) => (
        <Grid className={classes.container}>
          <Paper className={fixedHeightPaperTotal}>
            <CardTotal {...card} key={i} />
          </Paper>
        </Grid>
      ))}
    </React.Fragment>
  );
}