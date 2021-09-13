import React from "react";
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

export default function Deposits(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title className={classes.colorText}>{props.title}</Title>
      <Typography component="p" variant="h4" className={classes.colorText}>
        {props.count}
      </Typography>
    </React.Fragment>
  );
}
