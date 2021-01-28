// HOME PAGE //
import { useState, useEffect } from 'react';
import MovieList from './MovieList';
import RemoveFavourites from './FavouritesButton';
import SubNav from './SubNav';

function Home( { sort } ) {
  const API_KEY = '80b08b43125772f29e329b06bba72a9c'; 

  const [favourites, setFavourites] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
 

  const getPopularMovieRequest = async () => {
    const popularUrl = `https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1&region=US`;

    const response = await fetch(popularUrl);
    const responseJson = await response.json();

    console.log(responseJson);
    setPopularMovies(responseJson.results);
    }

  // Request will get called only when the page loads
  useEffect(() => {
      getPopularMovieRequest();
      let movieFavourites = localStorage.getItem('favourites')
      if (movieFavourites === null){
        movieFavourites = [];
      }else{
        movieFavourites = JSON.parse(movieFavourites);
      }
      setFavourites(movieFavourites);

   }, [sort]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('favourites', JSON.stringify(items))
  }
 
   const AddFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie]
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
        console.log(movie.id)
   }

let page = sort;
let currentPage = page.replace("_", " ");

  return (
    <main>
        <SubNav />
          <div>
            <div class="vl-left"></div>
            <div class="vl-right"></div>
            <h1 className="current-page-title">{currentPage}</h1>
            <MovieList popularMovies={popularMovies} handleFavouritesClick={AddFavouriteMovie}  />
          </div>
    </main>
  );
}
export default Home;