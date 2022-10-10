import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";

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
    return (
        <>
        </>
    );
};

export default Dashboard;