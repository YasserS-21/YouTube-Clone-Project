export default function VideoListing ({video}) {
    console.log(video)
    return(
        <>
        <li>
            <p>{video.snippet.title}</p>
        </li>
        </>
    )
}