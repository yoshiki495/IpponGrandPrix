import * as React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";

const MeetingView = () => {

    async function handleCreateMeetingRoom() {
        try {
            const  str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            const token = Array.from(crypto.getRandomValues(new Uint8Array(16))).map((n)=>str[n%str.length]).join('')
            await addDoc(collection(db, "MeetingRooms"), {
                token: token,
            });
            window.open("../../meeting-room/"+token, "_blank");
        } catch (error) {
            console.error(error);
        };
    };

    const [value, setValue] = useState('default');

    async function handleParticipateMeetingRoom() {
        try {
            window.open("../../meeting-room/"+value, "_blank");
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <Button variant="contained" color="secondary" onClick={handleCreateMeetingRoom}>部屋を作る</Button>
            <TextField id="outlined-basic" label="招待コード" variant="outlined" onChange={(event) => setValue(event.target.value)}/>
            <Button variant="outlined" color="secondary" onClick={handleParticipateMeetingRoom}>部屋に入る</Button>
        </>
    );
};

export default MeetingView;