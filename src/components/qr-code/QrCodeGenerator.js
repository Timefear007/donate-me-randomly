import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import QRCode from "qrcode.react";
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const generatePayload = require('promptpay-qr');

const useStyles = makeStyles(theme => ({
}));

export default function QrCodeGenerator() {
    const classes = useStyles();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [amount, setAmount] = useState(1.0);
    const [promptpayValue, setPromtpayValue] = useState("test");

    const updateQRCode = () => {
        let payload = generatePayload(phoneNumber, { amount });
        setPromtpayValue(payload);
    }

    return (
        <form noValidate autoComplete="off">
            <Grid container 
            spacing={1} 
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.root}>
                <Grid container item xs={3}>
                    <TextField
                        id="Phone number"
                        label="Phone number"
                        value={phoneNumber}
                        onChange={(event) => { setPhoneNumber(event.target.value) }}
                    />
                </Grid>
                <Grid container item xs={3}>
                    <TextField
                        id="Amount"
                        type="number"
                        label="Amount"
                        value={amount}
                        onChange={(event) => {
                            if (event.target.value > 0) {
                                setAmount(parseFloat(event.target.value));
                            } else setAmount(0);
                        }}
                    />
                </Grid>
                <Grid container item xs={3}>
                    <Button variant="contained" color="primary" onClick={() => { updateQRCode() }}>
                        Generate
                </Button>
                </Grid>
                <Grid container item xs={3} >
                    <QRCode value={promptpayValue} size={200}/>
                </Grid>
            </Grid>
        </form>
    );
}
