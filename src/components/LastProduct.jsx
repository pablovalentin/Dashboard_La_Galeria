import React from "react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  depositContext: {
      flex: 1,
  },
  colorText: {
      color: '#FFFFFF',
  },
  large: {
      height: '50%',
      width: '60%',
      margin: 'auto'
  },

  paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
  },

  details: {
      borderRadius: 10,
      backgroundSize: "200%",
      boxShadow: "0 3px 5px 2px rgba(025, 015, 020, .3)",
      transition: "0.6s",
      backgroundImage: "linear-gradient(45deg, #ba68c8, #e1bee7, #8e24aa)",
      "&:hover": {
          backgroundPosition: "right",
      },
      alignItems: "center",
  },

  fixedHeightLast: {
      [theme.breakpoints.down("sm")]: {
          height: 270,
      },
      [theme.breakpoints.up("md")]: {
          height: 300,
      },
  },

}));

export default function LastProduct() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data.lastProduct);
      });
  }, []);
  const classes = useStyles();
  const fixedHeightPaperDetail = clsx(
    classes.paper,
    classes.details,
    classes.fixedHeightLast
  );
  

  return (
    <React.Fragment>
      
      {/* <Grid item xs={12} md={6} lg={6}> */}
      <Paper className={fixedHeightPaperDetail}>
      <Title className={classes.colorText}>Último producto registrado:</Title>
      <Typography component="p" variant="h5" className={classes.colorText}>
        {product.name}
      </Typography>
      <Typography component="p" variant="h5" className={classes.colorText}>
        {"Stock: " + product.quantity}
      </Typography>
      <Typography component="p" variant="h5" className={classes.colorText}>
        {"$" + product.price}
      </Typography>
      <Typography component="p" variant="h5" className={classes.colorText}>
        {"Categoria: " + product.category}
      </Typography>
      </Paper>
      {/* </Grid> */}
    
    </React.Fragment>
  );
}
