import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
/* import Drawer from "@material-ui/core/Drawer"; */
import Box from "@material-ui/core/Box";
/* import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List"; */
import Typography from "@material-ui/core/Typography";
/* import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge"; */
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
/* import Menu from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems } from "./MainListItems"; */
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

  toolbar: {
    paddingRight: 24, // Deja el padding a la derecha cuando cierra el drawer
  },

  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  menuButton: {
    marginRight: 36,
  },

  menuButtonHidden: {
    display: "none",
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
  /* const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  }; */

  const fixedHeightPaperTotal = clsx(
    classes.paper,
    classes.totals,
    classes.fixedHeight
  );
  const fixedHeightPaperDetail = clsx(
    classes.paper,
    classes.details,
    classes.fixedHeightLast
  );
  const fixedHeightPaperCategories = clsx(
    classes.paper,
    classes.categories,
    classes.fixedHeightCategories
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <Menu />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard - La Galeria
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
      </Drawer> */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Tarjetas de totales */}
            {cardTotalProps.map((card, i) => (
              <Grid item xs={12} md={4} lg={4}>
                <Paper className={fixedHeightPaperTotal}>
                  <CardTotal {...card} key={i} />
                </Paper>
              </Grid>
            ))}
            {/* Tarjeta de último usuario */}
            <Grid item xs={12} md={6} lg={6}>
              {/* <Paper className={fixedHeightPaperDetail}> */}
                <LastUser />
              {/* </Paper> */}
            </Grid>
            {/* Tarjeta de último producto */}
            <Grid item xs={12} md={6} lg={6}>
              {/* <Paper className={fixedHeightPaperDetail}> */}
                <LastProduct />
              {/* </Paper>*/}
            </Grid> 
            {/* Listado de productos */}
            <Grid item xs={12}>
              {/* <Paper className={classes.paper}> */}
                <ProductList />
              {/* </Paper> */}
            </Grid>
            {/* Listado de categorias, con stock total */}
            <Grid item xs={12}>
              {/* <Paper className={fixedHeightPaperCategories}> */}
                <CardCategories />
             {/*  </Paper> */}
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
