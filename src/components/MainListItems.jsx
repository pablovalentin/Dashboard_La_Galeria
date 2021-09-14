import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssignmentIcon from "@material-ui/icons/Assignment";
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CategoryIcon from "@material-ui/icons/Category";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import TableChartIcon from "@material-ui/icons/TableChart";
import { Link } from "react-router-dom";


export const mainListItems = (
  <div>
    <Link to='/' style={{ textDecoration: 'none' }}>
    <ListItem button>
        <ListItemIcon >
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
    </ListItem>
    </Link>
    <Link to='/CardTotal' style={{ textDecoration: 'none' }}>
    <ListItem button>
        <ListItemIcon >
          <AssignmentIcon/>
        </ListItemIcon>
        <ListItemText primary="Totales" />
    </ListItem>
    </Link>
    <Link to='/LastUser' style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIndIcon />
      </ListItemIcon>
      <ListItemText primary="Usuarios" />
    </ListItem>
    </Link>
    <Link to='/LastProduct' style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <LocalDrinkIcon />
      </ListItemIcon>
      <ListItemText primary="Productos" />
    </ListItem>
    </Link>
    <Link to='/ProductList' style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <TableChartIcon />
      </ListItemIcon>
      <ListItemText primary="Listado" />
    </ListItem>
    </Link>
    <Link to='/CardCategories' style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="Categorías" />
    </ListItem>
    </Link>
  </div>
);
