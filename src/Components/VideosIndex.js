import { useState, useEffect } from "react";
import { getVideos } from "../api/fetch";
import VideoListing from "./VideoListing";
const key = process.env.REACT_APP_API_KEY;


export default function VideosIndex () {
    const [search, setSearch] = useState("")
    const [videos, setVideos] = useState([])
    function searchVideos(e) {
        e.preventDefault()
        setSearch(e.target[0].value)
        console.log(videos)
    }
    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${ search ? search : ""}&type=video&key=${key}`)
        .then((response) => response.json())
        .then((response)=>{
            setVideos(response.items)
        })
    },[search]);
  
    return (
        <>
        <div className="searchBar">
        <form className="searchForm" onSubmit={searchVideos}>
        <input type="text"></input>
        <button>Search</button>
        </form>
        </div>
        
        <div className="Videos">
            <ul>
            {videos.map((video) => {
            return <VideoListing video={video}/>
            })}
            </ul>
        </div>
        </>
    )
}