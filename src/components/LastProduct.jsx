import React from 'react';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
    colorText: {
        color: '#FFFFFF',
    }
});

export default function LastUser() {

    const [product, setProduct] = useState([])
    let lastProduct = []

    useEffect(() => {
        fetch('http://localhost:3000/api/products')
            .then(res => res.json())
            .then(data => {
            setProduct(data.data.products)
            })     
        }, [])
    
    product.map((product,i,array) => {
        if (array.length -1 === i){
            lastProduct = product
        }
    })

    const classes = useStyles();
    return (
    <React.Fragment>
        <Title className={classes.colorText}>Último producto añadido:</Title>
        <Typography component="p" variant="h5" className={classes.colorText}>
            {"Producto: " + lastProduct.name}
        </Typography>
        <Typography component="p" variant="h6" className={classes.colorText}>
            {"Stock: " + lastProduct.quantity}
        </Typography>
        <Typography component="p" variant="h6" className={classes.colorText}>
            {"Precio: $" + lastProduct.price}
        </Typography>
        <Typography component="p" variant="h6" className={classes.colorText}>
            {"Categoria: " + lastProduct.category}
        </Typography>
    </React.Fragment>
    
);
}