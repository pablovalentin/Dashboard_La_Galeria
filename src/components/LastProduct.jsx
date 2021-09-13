import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  colorText: {
    color: "#FFFFFF",
  },
});

export default function LastProduct() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data.lastProduct);
      });
  }, []);

  const classes = useStyles();

  return (
    <React.Fragment>
      <Title className={classes.colorText}>Último Producto registrado:</Title>
      <Typography component="p" variant="h5" className={classes.colorText}>
        {product.name}
      </Typography>
      <Typography component="p" variant="h5" className={classes.colorText}>
        {"Stock: " + product.quantity}
      </Typography>
      <Typography component="p" variant="h5" className={classes.colorText}>
        {"$" + product.price}
      </Typography>
      <Typography component="p" variant="h5" className={classes.colorText}>
        {"Categoria: " + product.category}
      </Typography>
    </React.Fragment>
  );
}
