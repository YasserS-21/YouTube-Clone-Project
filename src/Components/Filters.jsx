export default function Filters({setMaxResults, setSearchBy, setSafeSearch, safeSearch, maxResults, searchBy}) {

  
    const handleMaxResultsChange = (event) => {
        event.preventDefault()
        console.log(event.target[0].value, event)
      setMaxResults(event.target[0].value);
    };
  
    const handleSearchByChange = (event) => {
      setSearchBy(event.target.value);
    };
  
    const handleSafeSearchChange = (event) => {
      setSafeSearch(event.target.value);
    };

    return(
        <>
         <form onSubmit={handleMaxResultsChange}className="filters">
                      <label for="max-results">Maximum Results:</label>
  <input type="number" id="max-results" name="max-results" placeholder={maxResults}/><br/>
  <fieldset>
    <legend>Search By:</legend>

    <input onChange={handleSearchByChange} type="radio" id="relevance" name="search-by" value="relevance" defaultChecked={searchBy === "relevance"}/>
    <label for="relevance">Relevance</label><br/>

    <input onChange={handleSearchByChange} type="radio" id="date" name="search-by" value="date" defaultChecked={searchBy === "date"}/>
    <label for="date">Date</label><br/>

    <input onChange={handleSearchByChange} type="radio" id="rating" name="search-by" value="rating" defaultChecked={searchBy === "rating"}/>
    <label for="rating">Rating</label><br/>

    <input onChange={handleSearchByChange} type="radio" id="title" name="search-by" value="title" defaultChecked={searchBy === "title"}/>
    <label for="title">Title</label><br/>
  </fieldset>
  <fieldset>
    <legend>Safe Search Filter:</legend>

    <input onChange={handleSafeSearchChange} type="radio" id="moderate" name="search-results" value="moderate" defaultChecked={safeSearch === "moderate"}/>
    <label for="moderate">Moderate</label><br/>

    <input onChange={handleSafeSearchChange} type="radio" id="none" name="search-results" value="none" defaultChecked={safeSearch === "none"}/>
    <label for="none">None</label><br/>

    <input onChange={handleSafeSearchChange} type="radio" id="strict" name="search-results" value="strict" defaultChecked={safeSearch === "strict"}/>
    <label for="strict">Strict</label><br/>
  </fieldset>
                </form>
    </>
    )
}