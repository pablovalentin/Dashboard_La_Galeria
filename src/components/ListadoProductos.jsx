import React from 'react';
import { useEffect, useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();

  const [productList, setProductList] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/api/products')
        .then(res => res.json())
        .then(data => {
          setProductList(data.data.products)
        })     
}, [])

  return (
    <React.Fragment>
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
            return(
            <TableRow key={ i }>
              <TableCell>{product.name}</TableCell>              
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell align="right">{'$' + product.price}</TableCell>
            </TableRow>
            )
            })}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          ver más productos
        </Link>
      </div>
    </React.Fragment>
  );
}