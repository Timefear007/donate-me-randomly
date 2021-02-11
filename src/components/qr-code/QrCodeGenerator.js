import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography'
import Button from "@material-ui/core/Button";
import QRCode from "qrcode.react";
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const generatePayload = require('promptpay-qr');

const getRandomAmount = (min,max)=>{
    min= Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)+min);
}

const useStyles = makeStyles(theme => ({
    
}));

export default function QrCodeGenerator() {
    const classes = useStyles();
    const mobileNumber = "062-020-2096";
    const [amount, setAmount] = useState(getRandomAmount(1,20000));

    const updateQRCode = () => {
        setAmount(getRandomAmount(1,20000));
    }

    return (
        <form noValidate autoComplete="off">
            <Grid container 
            spacing={1} 
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.root}>
                    <Typography
                        style={{margin:60, fontSize:32}}
                    >
                        {amount} ฿
                    </Typography>
                    <Button variant="contained" style={{margin:30}} color="primary" onClick={() => { updateQRCode() }}>
                        Random
                </Button>
                    <QRCode value={generatePayload(mobileNumber, { amount })} size={200}/>
                <Typography style={{fontSize:32}}>Scan This</Typography>
            </Grid>
        </form>
    );
}
