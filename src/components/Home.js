// HOME PAGE //
import { useState, useEffect } from 'react';
import MovieList from './MovieList';
import SubNav from './SubNav';
import Scroll from './ScrollTop';

function Home( { sort } ) {
  const API_KEY = '80b08b43125772f29e329b06bba72a9c'; 

  const [favourites, setFavourites] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
 

  const getPopularMovieRequest = async () => {
    const popularUrl = `https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1&region=US`;

    const response = await fetch(popularUrl);
    const responseJson = await response.json();

    //console.log(responseJson);
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
        //console.log(movie.id)
   }

   const deleteFavourites = (id) => {
    //('remove favourites')
    const indexOfMovieToRemove = favourites.findIndex(movie => movie.id === id);
    //console.log(indexOfMovieToRemove)
    let tempArray = [...favourites];
    tempArray.splice(indexOfMovieToRemove, 1);
    //console.log(tempArray)
    setFavourites(tempArray);
    saveToLocalStorage(tempArray);
   }

let page = sort;
let currentPage = page.replace("_", " ");

  return (
    <main>
      <div className="vl-left"></div>
      <div className="vl-right"></div>
        <SubNav />
          <div>
            <h1 className="current-page-title">{currentPage}</h1>
            <MovieList popularMovies={popularMovies} handleAddFavourites={AddFavouriteMovie} handleDeleteFavourites={deleteFavourites}  />
          </div>
          <Scroll />
    </main>
  );
}
export default Home;