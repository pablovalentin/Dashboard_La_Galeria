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

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
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
      <Title>Listado de productos</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell align="right">Precio</TableCell>
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
      </Paper>
    </React.Fragment>
  );
}
