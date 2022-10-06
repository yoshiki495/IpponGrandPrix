import { useParams } from "react-router-dom";

const IpponRoom = () => {
    const { token } = useParams();
    if (typeof token === "string") {
        return (
            <></>
        );
    } else {
        return null;
    }
};
    
export default IpponRoom;