import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CardTotal from "./CardTotal";
import CardCategories from "./CardCategories";
import LastUser from "./LastUser";
import LastProduct from "./LastProduct";
import ProductList from "./ProductList";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "} Grupo 3 {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: {
      color: "#E1F5FE",
    },
  },

  title: {
    flexGrow: 1,
  },

  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },

  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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

  categories: {
    borderRadius: 10,
    backgroundSize: "200%",
    boxShadow: "0 3px 5px 2px rgba(025, 015, 020, .3)",
    transition: "0.6s",
    backgroundImage: "linear-gradient(45deg, #26a69a, #b2dfdb, #00695c)",
    "&:hover": {
      backgroundPosition: "right",
    },
    alignItems: "center",
  },

  fixedHeight: {
    [theme.breakpoints.down("sm")]: {
      height: 115,
    },
    [theme.breakpoints.up("md")]: {
      height: 130,
    },
  },

  fixedHeightLast: {
    [theme.breakpoints.down("sm")]: {
      height: 270,
    },
    [theme.breakpoints.up("md")]: {
      height: 300,
    },
  },

  fixedHeightCategories: {
    [theme.breakpoints.down("sm")]: {
      height: 170,
    },
    [theme.breakpoints.up("md")]: {
      height: 190,
    },
  },

}));

export default function Dashboard() {
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
      });
  }, []);

  let cardTotalProps = [productCount, userCount, categoriesCount];

  const classes = useStyles();

  const fixedHeightPaperTotal = clsx(
    classes.paper,
    classes.totals,
    classes.fixedHeight
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Tarjetas de totales */}
            {cardTotalProps.map((card, i) => (
              <Grid item xs={12} md={4} lg={4} key={i}>
                <Paper className={fixedHeightPaperTotal}>
                  <CardTotal {...card}/>
                </Paper>
              </Grid>
            ))}
            {/* Tarjeta de último usuario */}
            <Grid item xs={12} md={6} lg={6}>
              <LastUser />
            </Grid>
            {/* Tarjeta de último producto */}
            <Grid item xs={12} md={6} lg={6}>
              <LastProduct />
            </Grid> 
            {/* Listado de productos */}
            <Grid item xs={12}>
              <ProductList />
            </Grid>
            {/* Tarjeta de categorias */}
            <Grid item xs={12}>
                <CardCategories />
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
