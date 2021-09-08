import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import CategoryIcon from '@material-ui/icons/Category';
import TableChartIcon from '@material-ui/icons/TableChart';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Totales" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DataUsageIcon />
      </ListItemIcon>
      <ListItemText primary="Detalle" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="Categorías" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TableChartIcon />
      </ListItemIcon>
      <ListItemText primary="Productos" />
    </ListItem>
  </div>
);