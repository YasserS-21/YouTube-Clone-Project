import YouTube from "react-youtube"
import CommentSection from "./CommentSection";

export default function VideoPlayer() {
    console.log(window.location.href)
    console.log((window.location.href).split("/")[4])
    return (
        <>
            <YouTube videoId={`${(window.location.href).split("/")[4]}`} />
            < CommentSection />
        </>
    )
}