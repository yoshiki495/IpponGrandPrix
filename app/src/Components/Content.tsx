import { useParams } from "react-router-dom";
import MeetingView from "./Meeting";
import Minutes from "./Minutes";


const Content = () => {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    const { content } = useParams();

    if ( content === "meeting" ) {
        return (
            <MeetingView />
        );
    } else {
        return (
            <Minutes />
        )
    }
  }

export default Content;