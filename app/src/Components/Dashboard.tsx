import * as React from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";

const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

const Dashboard = () => {
    async function handleCreateIpponRoom() {
        try {
            const  str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            const token = Array.from(crypto.getRandomValues(new Uint8Array(16))).map((n)=>str[n%str.length]).join('')
            await addDoc(collection(db, "IpponRooms"), {
                token: token,
            });
            window.open("../../ippon-room/"+token, "_blank");
        } catch (error) {
            console.error(error);
        };
    };

    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrency(event.target.value);
    };
    return (
        <Box sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            alignItems: 'center',
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography>参加者を入力してください。</Typography>
                </Grid>
                <Grid item xs={2}>
                    <TextField id="outlined-basic" label="名前" variant="outlined" />
                </Grid>
                <Grid item xs={2}>
                    <TextField id="outlined-basic" label="名前" variant="outlined" />
                </Grid>
                <Grid item xs={2}>
                    <TextField id="outlined-basic" label="名前" variant="outlined" />
                </Grid>
                <Grid item xs={2}>
                    <TextField id="outlined-basic" label="名前" variant="outlined" />
                </Grid>
                <Grid item xs={2}>
                    <TextField id="outlined-basic" label="名前" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <Typography>お題を入力してください。</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="filled-basic" label="お題" variant="filled" fullWidth/>
                </Grid>
                <Grid item xs={12} sx={{marginTop: 2}}>
                    <Button variant="contained">登録する</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;