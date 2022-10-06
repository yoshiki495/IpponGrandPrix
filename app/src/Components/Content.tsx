import { useParams } from "react-router-dom";
import Dashboard from "./Dashboard";
import Setting from "./Setting";


const Content = () => {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    const { content } = useParams();

    if ( content === "dashboard" ) {
        return (
            <Dashboard/>
        );
    } else {
        return (
            <Setting />
        )
    }
  }

export default Content;