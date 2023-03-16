import YouTube from "react-youtube"
import CommentSection from "./CommentSection";

export default function VideoPlayer() {
    return (
        <>
            <YouTube videoId={`${(window.location.href).split("/")[4]}`} />
            < CommentSection />
        </>
    )
}