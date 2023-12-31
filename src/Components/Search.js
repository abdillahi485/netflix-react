import { useState } from "react";
function Search() {
  const [info,setInfo]=useState("")
  return (
    <div className="search-section">
      Search for your favorite shows
      <div classNameName="search-input">
        <input className="search-box" type="text" placeholder="Search" onChange={(e)=>setInfo(e.target.value)} />
        <button className="btn-search">Search</button>
      </div>
    </div>
  );
}

export default Search;