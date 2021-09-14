import React from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Dashboard from "./components/Dashboard";
import CardCategories from "./components/CardCategories";
import LastUser from "./components/LastUser";
import LastProduct from "./components/LastProduct";
import ProductList from "./components/ProductList";
import CardTotal from "./components/CardTotal";
import { Route, Switch } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Menu from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems } from "./components/MainListItems";
import './app.css';
const drawerWidth = 240;

export default function App() {
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

    totalDivider: {
      height: "100%",
      position: "absolute",
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
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  
  return (
    <main>
      <CssBaseline />
      <AppBar
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
        <Divider className={classes.totalDivider}/>
          <List>{mainListItems}</List>
      </Drawer>
    <div className="swtich-container">
    <Switch>
      <Route exact path="/" render={(props) => <Dashboard {...props} />} />
      <Route
        exact
        path="/CardTotal"
        render={(props) => <CardTotal {...props} />}
      />
      <Route
        exact
        path="/LastUser"
        render={(props) => <LastUser {...props} />}
      />
      <Route
        exact
        path="/LastProduct"
        render={(props) => <LastProduct {...props} />}
      />
            <Route
        exact
        path="/ProductList"
        render={(props) => <ProductList {...props} />}
      />
      <Route
        exact
        path="/CardCategories"
        render={(props) => <CardCategories {...props} />}
      />
    </Switch>
    </div>
    </main>
  );
}
