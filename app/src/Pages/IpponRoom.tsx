import { useParams } from "react-router-dom";
import QRCode from "qrcode.react"

const IpponRoom = () => {
  const {roomId} = useParams();
    const mobileUrl = "http://localhost:3000/ippon-room/" + roomId + "/mobile"
    console.log(mobileUrl);
    return ( 
      <>
        <QRCode value={mobileUrl} />
      </>
    );
  }
    
export default IpponRoom;