import { Link } from "react-router-dom";
export default function VideoListing ({video}) {
    
    return(
        <>
        <li>
            <Link to={`/watch/${video.id.videoId}`}><img src={video.snippet.thumbnails.medium.url}/></Link>
            <p>{video.snippet.title}</p>
        </li>
        </>
    )
}