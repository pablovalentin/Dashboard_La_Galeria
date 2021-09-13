import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import CircularProgress from "@material-ui/core/CircularProgress"

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  colorText: {
    color: "#FFFFFF",
  },
});

export default function CardCategories() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.meta.countByCategory);
      });
  }, []);

  const classes = useStyles();

  return (
    <React.Fragment>
      {categories ? (<>
        <Title className={classes.colorText}>Categorias</Title>      
          <Typography component="p" variant="h5" className={classes.colorText}>
            Vinos: {categories.vinos}
          </Typography>
          <Typography component="p" variant="h5" className={classes.colorText}>
            Whiskies: {categories.whiskies}
          </Typography>
          <Typography component="p" variant="h5" className={classes.colorText}>
            Spirits: {categories.spirits}
          </Typography>
          </>
      ) : (<>
        <CircularProgress />
        </>
      )}
    </React.Fragment>
  );
}
