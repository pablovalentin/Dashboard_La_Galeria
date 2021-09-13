import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  colorText: {
    color: "#FFFFFF",
  },
});

export default function CardCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.meta);
      });
  }, []);

  const classes = useStyles();

  return (
    <React.Fragment>
      <Title className={classes.colorText}>Categorias</Title>
      <Typography component="p" variant="h5" className={classes.colorText}>
        Vinos: 4
      </Typography>
      <Typography component="p" variant="h5" className={classes.colorText}>
        Whiskies: 8
      </Typography>
      <Typography component="p" variant="h5" className={classes.colorText}>
        Spirits: 5
      </Typography>
    </React.Fragment>
  );
}
