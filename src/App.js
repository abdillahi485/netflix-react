import Header from "./Components/Header";
import Search from "./Components/Search";
import MovieCard from "./Components/MovieCard";
function App() {
  function searchBtn(){
    fetch("https://api.tvmaze.com/search/shows?q=girls")
    .then((res)=>{
      res.json()
    })
    .then((data)=>{
      console.log(data)
    })
  }
  return (
    <div classNameName="App">
      <Header />
      <div className="main">
        <Search />
        <div className="movies-section">
          {/* <!-- one card --> */}
          <MovieCard />
          {/* <!-- one card --> */}
        </div>
      </div>
    </div>
  );
}

export default App;

