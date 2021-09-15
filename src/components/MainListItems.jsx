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
          <ListItemText primary="Dashboard" style={{ marginLeft: 30 }}/>
        </ListItemIcon>
    </ListItem>
    </Link>
    <Link to='/AllTotals' style={{ textDecoration: 'none' }}>
    <ListItem button>
        <ListItemIcon >
          <AssignmentIcon/>
          <ListItemText primary="Totales" style={{ marginLeft: 30 }}/>
        </ListItemIcon>
    </ListItem>
    </Link>
    <Link to='/LastUser' style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIndIcon />
        <ListItemText primary="Usuarios" style={{ marginLeft: 30 }}/>
      </ListItemIcon>      
    </ListItem>
    </Link>
    <Link to='/LastProduct' style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <LocalDrinkIcon />
        <ListItemText primary="Productos" style={{ marginLeft: 30 }}/>
      </ListItemIcon>      
    </ListItem>
    </Link>
    <Link to='/ProductTable' style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <TableChartIcon />
        <ListItemText primary="Listado" style={{ marginLeft: 30 }}/>
      </ListItemIcon>     
    </ListItem>
    </Link>
    <Link to='/CardCategories' style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <CategoryIcon />
        <ListItemText primary="Categorías" style={{ marginLeft: 30 }}/>
      </ListItemIcon>     
    </ListItem>
    </Link>
  </div>
);
