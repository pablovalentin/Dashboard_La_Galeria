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

    const [user, setUser] = useState([])
    let lastUser = []

    useEffect(() => {
        fetch('http://localhost:3000/api/users')
            .then(res => res.json())
            .then(data => {
            setUser(data.data.detail)
            })     
        }, [])
    
    user.map((user,i,array) => {
        if (array.length -1 === i){
            lastUser = user
        }
    })

    const classes = useStyles();
    return (
    <React.Fragment>
        <Title className={classes.colorText}>Último usuario registrado:</Title>
        <Typography component="p" variant="h4" className={classes.colorText}>
            {lastUser.name}
        </Typography>
        <Typography component="p" variant="h6" className={classes.colorText}>
            {lastUser.email}
        </Typography>
    </React.Fragment>
    
);
}