// HOME PAGE //
import { useState, useEffect } from 'react';
import MovieList from './Popular';
import AddFavourites from './AddFavourites';
import RemoveFavourites from './RemoveFavourites';

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

  /*  useEffect(() => {
     const movieFavourites = JSON.parse(
      localStorage.getItem('favourites')
      );
      setFavourites(movieFavourites);
   }, []); */

  const saveToLocalStorage = (items) =>{
    localStorage.setItem('favourites', JSON.stringify(items))
  }

   const AddFavouriteMovie = (movie) => {
     const newFavouriteList = [...favourites, movie]
     setFavourites(newFavouriteList);
     saveToLocalStorage(newFavouriteList);
   }

   const removeFavouriteMovie = (movie) => {
      const newFavouriteList = favourites.filter(
        (favourite) => favourite.movie_id !== movie.movie_id // movie_id taken directly from the DB
      );
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
   }

  return (
    <main>
        <form className="sort-movies">
          <label htmlFor="sort-by">Sort By:</label>
          <select name="sort-by" id="sort-by">			
				    <option value="Popular">Popular</option>
            <option value="top-rated">Top Rated</option>
            <option value="top-rated">Now Playing</option>
            <option value="top-rated">Coming Soon</option>
          </select>
        </form>
          <div>
            <h1>Favourites</h1>
            <MovieList movies={favourites} handleFavouritesClick={removeFavouriteMovie} favouriteComponent = {RemoveFavourites}/>
          </div>
          <div>
            <MovieList movies={movies} handleFavouritesClick={AddFavouriteMovie} favouriteComponent = {AddFavourites}/>
          </div>
    </main>
  );
}

export default Home;