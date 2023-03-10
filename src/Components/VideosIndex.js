export default function VideosIndex () {
    function searchVideos() {

    }
    return (
        <>
        <div className="searchBar">
        <form>
        <input type="text"></input>
        <button onClick={searchVideos}>Search</button>
        </form>
        </div>
        <div className="Videos">
            {/* map */}
        </div>
        </>
    )
}