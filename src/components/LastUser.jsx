import React from 'react';
import clsx from "clsx";
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar'
import Title from './Title';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    depositContext: {
        flex: 1,
    },
    colorText: {
        color: '#FFFFFF',
    },
    large: {
        height: 75,
        width: 75,
        margin: 'auto'
    },

    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column",
    },

    details: {
        borderRadius: 10,
        backgroundSize: "200%",
        boxShadow: "0 3px 5px 2px rgba(025, 015, 020, .3)",
        transition: "0.6s",
        backgroundImage: "linear-gradient(45deg, #ba68c8, #e1bee7, #8e24aa)",
        "&:hover": {
            backgroundPosition: "right",
        },
        alignItems: "center",
    },

    fixedHeightLast: {
        [theme.breakpoints.down("sm")]: {
            height: 270,
        },
        [theme.breakpoints.up("md")]: {
            height: 250,
        },
    },

}));

export default function LastUser() {

    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/users')
            .then(res => res.json())
            .then(data => {
            setUser(data.data.lastUser)
            })     
        }, [])

    const classes = useStyles();

    const fixedHeightPaperDetail = clsx(
        classes.paper,
        classes.details,
        classes.fixedHeightLast
    );

    return (
    <React.Fragment>
        <Paper className={fixedHeightPaperDetail}>
        <Title className={classes.colorText}>Último usuario registrado:</Title>
        <Typography component="p" variant="h5" className={classes.colorText}>
            <Avatar alt="Imagen de usuario" src={user.image} className={classes.large}/>
        </Typography>
        <Typography component="p" variant="h5" className={classes.colorText}>
            {user.name + ' ' + user.lastName}
        </Typography>
        <Typography component="p" variant="h5" className={classes.colorText}>
            {user.email}
        </Typography>
        </Paper>
    </React.Fragment>
    
);
}