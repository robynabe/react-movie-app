// HOME PAGE //
import { useState, useEffect } from 'react';
import MovieList from './Popular';
import AddFavourites from './AddFavourites';
import RemoveFavourites from './RemoveFavourites';
import SubNav from './SubNav';

function Home() {
  const API_KEY = '80b08b43125772f29e329b06bba72a9c'; // can't get the variable to work

  const [favourites, setFavourites] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  const getPopularMovieRequest = async () => {
    const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    const response = await fetch(popularUrl);
    const responseJson = await response.json();

    console.log(responseJson);
    setPopularMovies(responseJson.results);
    }

  // Request will get called only when the page loads
  useEffect(() => {
      getPopularMovieRequest();
   }, []);

  // can't get the local storage to work - favourites disappear on refresh
  // useEffect(() => {
  //   const movieFavourites = JSON.parse(
  //     localStorage.getItem('favourites')
  //   );
  //   setFavourites(movieFavourites);
  // }, []);

  const saveToLocalStorage = (items) => {
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
        <SubNav />
          <div>
            <h1>Favourites</h1>
            <MovieList popularMovies={favourites} handleFavouritesClick={removeFavouriteMovie} favouriteComponent = {RemoveFavourites}/>
          </div>
          <div>
            <h1>Popular Movies</h1>
            <MovieList popularMovies={popularMovies} handleFavouritesClick={AddFavouriteMovie} favouriteComponent = {AddFavourites}/>
          </div>
    </main>
  );
}

export default Home;