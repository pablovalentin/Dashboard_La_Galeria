import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssignmentIcon from "@material-ui/icons/Assignment";
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import CategoryIcon from "@material-ui/icons/Category";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import TableChartIcon from "@material-ui/icons/TableChart";



export const mainListItems = (
  <div>
    <a href='/CardCategories' style={{ textDecoration: 'none' }}>
    <ListItem button>
        <ListItemIcon >
          <AssignmentIcon/>
        </ListItemIcon>
        <ListItemText primary="Totales" />
    </ListItem>
    </a>
    <a href='/LastUser' style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIndIcon />
      </ListItemIcon>
      <ListItemText primary="Usuarios" />
    </ListItem>
    </a>
    <a href='/LastProduct' style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <LocalDrinkIcon />
      </ListItemIcon>
      <ListItemText primary="Productos" />
    </ListItem>
    </a>
    <a href='/CardCategories' style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <TableChartIcon />
      </ListItemIcon>
      <ListItemText primary="Listado" />
    </ListItem>
    </a>
    <a href='/CardCategories' style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="Categorías" />
    </ListItem>
    </a>
  </div>
);
