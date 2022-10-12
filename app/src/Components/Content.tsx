import { useParams } from "react-router-dom";
import Registration from "./Registraion";
import Operation from "./Operation";


const Content = () => {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    const { content } = useParams();

    if ( content === "registration" ) {
        return (
            <Registration/>
        );
    } else {
        return (
            <Operation />
        )
    }
  }

export default Content;