import { useLocation } from "react-router-dom";
import QRCode from "qrcode.react"

const IpponRoom = () => {
    const location = useLocation();
    return ( 
      <>
        <QRCode value="https://google.com" />
      </>
    );
  }
    
export default IpponRoom;