import YouTube from "react-youtube"
export default function VideoPlayer () {

    return(
        <>
        <YouTube videoId={`${(window.location.href).split("/")[4]}`}/>
        </>
    )
}