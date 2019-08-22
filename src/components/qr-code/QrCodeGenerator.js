import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import QRCode from "qrcode.react";

const generatePayload = require('promptpay-qr');

export default function QrCodeGenerator() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [amount, setAmount] = useState(1.0);
    const [promptpayValue, setPromtpayValue] = useState("test");

    const updateQRCode = () => {
        let payload = generatePayload(phoneNumber, { amount });
        setPromtpayValue(payload);
    }

    return (
        <form noValidate autoComplete="off">
            <TextField
                id="Phone number"
                label="Phone number"
                value={phoneNumber}
                margin="normal"
                onChange={(event) => { setPhoneNumber(event.target.value) }}
            />
            <TextField
                id="Amount"
                type="number"
                label="Amount"
                value={amount}
                margin="normal"
                onChange={(event) => {
                    if (event.target.value > 0) {
                        setAmount(parseFloat(event.target.value));
                    } else setAmount(0);
                }}
            />
            <Button variant="contained" color="primary" onClick={() => { updateQRCode() }}>
                Generate
            </Button>
            <QRCode value={promptpayValue} />
        </form>
    );
}
