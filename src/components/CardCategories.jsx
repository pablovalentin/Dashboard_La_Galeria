import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import CircularProgress from "@material-ui/core/CircularProgress"

const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
  },
  colorText: {
    color: "#FFFFFF",
  },
  categories: {
    borderRadius: 10,
    backgroundSize: "200%",
    boxShadow: "0 3px 5px 2px rgba(025, 015, 020, .3)",
    transition: "0.6s",
    backgroundImage: "linear-gradient(45deg, #26a69a, #b2dfdb, #00695c)",
    "&:hover": {
      backgroundPosition: "right",
    },
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  
  fixedHeightCategories: {
    [theme.breakpoints.down("sm")]: {
      height: 270,
      /* width: 340, */
    },
    [theme.breakpoints.up("md")]: {
      height: 250,
      /* width: 340, */
    },
  },
}));

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
  const fixedHeightPaperCategories = clsx(
    classes.paper,
    classes.categories,
    classes.fixedHeightCategories
  );

  return (
    <React.Fragment>
      <Paper className={fixedHeightPaperCategories}>
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
      </Paper>
    </React.Fragment>
  );
}
