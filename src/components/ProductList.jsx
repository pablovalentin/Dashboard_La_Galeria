import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress"

const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },

  bold: {
    fontWeight: 600
  },

  table: {
    '& tbody>.TableRow-root:hover': {
      background: 'red',
    }
  }

}));

export default function ProductList() {
  const classes = useStyles();

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProductList(data.data.products);
      });
  }, []);

  return (
    <React.Fragment>
      <Paper className={classes.paper}>
      {productList ? (<>
        <Title className={classes.bold}>Listado de productos</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell className={classes.bold}>Nombre</TableCell>
              <TableCell className={classes.bold}>Stock</TableCell>
              <TableCell className={classes.bold}>Categoria</TableCell>
              <TableCell className={classes.bold} align="right">Precio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList.map((product, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell align="right">{"$" + product.price}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </>
      ) : (<>
      <CircularProgress />
      </>
      )}
      </Paper>
    </React.Fragment>
  );
}
