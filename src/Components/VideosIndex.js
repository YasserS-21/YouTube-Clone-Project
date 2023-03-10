import { useState, useEffect } from "react";
import { getVideos } from "../api/fetch";
import YouTube from "react-youtube";
import VideoListing from "./VideoListing";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

const key = process.env.REACT_APP_API_KEY;


export default function VideosIndex() {
    const [search, setSearch] = useState("")
    const [videos, setVideos] = useState([])
    const [errorMessage, setError] = useState(null)
    const [modal, setModal] = useState(false);
    // const navigate = useNavigate();

    function searchVideos(e) {
        e.preventDefault()
        setSearch(e.target[0].value)
        console.log(videos)
    }



    useEffect(() => {
        const handleErrors = (response) => {
            if (!response.ok) {
                if (response.status === 400) {
                    console.log(response)
                    setError({
                        code: `Error ${response.status}`,
                        message: "The server was unable to process the request due to invalid information sent by the client. Please modify your request and try again"
                    })
                    setModal(!modal)
                } else {
                    setError({
                        code: `Error ${response.status}`,
                        message: "An error occurred while fetching the videos. Please try again later."
                    })
                    setModal(!modal)
                }
            }
            return response;
        };

        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${search}&key=${key}`)

            .then(handleErrors)
            .then((response) => {return response.json()})
            .then((response) => {
                setVideos(response.items)
            })
    }, [search]);

    return (
        <>
            <div className="searchBar">
                <form className="searchForm" onSubmit={searchVideos}>
                    <input type="text"></input>
                    <button>Search</button>
                </form>
            </div>

            <div className="Videos">
                {errorMessage ? (
                    <Modal code={errorMessage.code} message={errorMessage.message} modal={modal} setModal={setModal} />
                ) : (
                    <ul>
                        {search ? videos.map((video) => {
                            return <VideoListing video={video} />
                        }) : <p>no videos yet fam</p>}
                    </ul>
                )}
            </div>
        </>
    )
}