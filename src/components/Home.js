// HOME PAGE //
import { useState, useEffect } from 'react';
import MovieList from './Popular';
import AddFavourites from './AddFavourites';

function Home() {
  const API_KEY = '80b08b43125772f29e329b06bba72a9c';
  const [favourites, setFavourites] = useState([]);

  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.results);
    }

  // Request will get called only when the page loads
  useEffect(() => {
      getMovieRequest();
   }, []);

   const AddFavouriteMovie = (movie) => {
     const newFavouriteList = [...favourites,movie]
     setFavourites(newFavouriteList);
   }

  /*let initialMovieArray = [];
  //let favouriteMovies = localStorage.getItem('favMovies');
  const movieObj = [];
  movieObj.title = 'Soul';
  movieObj.poster = '...';
  initialMovieArray = JSON.stringify(movieObj)

  function addToFavourites(event){
    event.preventDefault();
    localStorage.setItem( 'favMovies', initialMovieArray ); 
    //let favMovies = localStorage.getItem('favMovies');
    //prompt ('Add Favourite Movie');
    //favMovies = JSON.parse(favMovies);
  
    //favMovies = JSON.stringify(favMovies);
    //localStorage.setItem('favMovies', favMovies);
  }*/

  return (
    <main>
        <form className="sort-movies">
          <label htmlFor="sort-by">Sort By:</label>
          <select name="sort-by" id="sort-by">			
				    <option value="Popular">Popular</option>
            <option value="top-rated">Top Rated</option>
          </select>
        </form>
          <div>
            <MovieList movies={movies} handleFavouritesClick={AddFavouriteMovie} favouriteComponent = {AddFavourites}/>
          </div>
    </main>
  );
}

export default Home;