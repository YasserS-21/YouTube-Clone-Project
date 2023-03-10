import { useState, useEffect } from "react";
import { getVideos } from "../api/fetch";

const key = process.env.REACT_APP_API_KEY;


export default function VideosIndex () {
    const [search, setSearch] = useState("dog")
    const [videos, setVideos] = useState([])
    function searchVideos(e) {
        e.preventDefault()
        console.log(e.target.value)
        setSearch(e.target.value)
        console.log(search)
        console.log(videos)
    }
    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=music&type=video&key=${key}`)
        .then((response) => response.json())
        .then((response)=>{
            setVideos(response.items)
        })
    },[]);
  
    return (
        <>
        <div className="searchBar">
        <form className="searchForm" onSubmit={searchVideos}>
        <input type="text"></input>
        <button>Search</button>
        </form>
        </div>
        <div className="Videos">
            {/* map */}
        </div>
        </>
    )
}