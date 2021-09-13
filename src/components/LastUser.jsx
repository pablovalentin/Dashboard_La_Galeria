import React from 'react';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar'
import Title from './Title';

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
    colorText: {
        color: '#FFFFFF',
    },
    large: {
        height: '50%',
        width: '60%',
        margin: 'auto'
    }

});

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

    return (
    <React.Fragment>
        <Title className={classes.colorText}>Último usuario registrado:</Title>
        <Typography component="p" variant="h5" className={classes.colorText}>
            {user.name + ' ' + user.lastName}
        </Typography>
        <Typography component="p" variant="h5" className={classes.colorText}>
            {user.email}
        </Typography>
        <Typography component="p" variant="h5" className={classes.colorText}>
            <Avatar alt="Imagen de usuario" src={user.image} className={classes.large}/>
        </Typography>
    </React.Fragment>
    
);
}