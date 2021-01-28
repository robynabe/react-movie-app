// HOME PAGE //
import { useState, useEffect } from 'react';
import MovieList from './Popular';
import FavouriteButton from './RemoveFavourites';
import SubNav from './SubNav';



function Home( { sort } ) {
  const API_KEY = '80b08b43125772f29e329b06bba72a9c'; // can't get the variable to work

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
 
 
  // Trying to stop duplicate movies added to faves 
   const AddFavouriteMovie = (movie) => {
      // if(useState.movieFavourites.some((movie) => movie.id === movie.id)){
        const newFavouriteList = [...favourites, movie]
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
        console.log(movie.id)
      //}
   }
  // Checking for Multiples in Faves
// const AddFavouriteMovie = (movie) => {
//   const updatedLocalStorage = favourites.JSON.parse()

//   if(updatedLocalStorage.favourites.length === 0){
//     return false;
//   }
//   // checks whether the movie is in the favs movie
//   // array...
//   return updatedLocalStorage.favourites.some((movie) => movie.id === movie.id);

// }
  
   


  return (
    <main>
        <SubNav />
          <div>

          </div>
          <div>
            <h1>{sort}</h1>
            <MovieList popularMovies={popularMovies} handleFavouritesClick={FavouriteButton}  />
          </div>
    </main>
  );
}
export default Home;