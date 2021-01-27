// HOME PAGE //
import { useState, useEffect } from 'react';
import MovieList from './Popular';
import AddFavourites from './AddFavourites';
import RemoveFavourites from './RemoveFavourites';
import SubNav from './SubNav';

function Home( { sort, checkFav } ) {
  const API_KEY = '80b08b43125772f29e329b06bba72a9c'; // can't get the variable to work
// copied to favourites page - also had to have it on this page...
  const [favourites, setFavourites] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  //END

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

  //  // COPIED TO FAVOURITES
  //  useEffect(() => {
  //   const movieFavourites = JSON.parse(
  //     localStorage.getItem('favourites')
  //   );
  //   setFavourites(movieFavourites);
  // }, []);
   //END

  //COPIED TO FAVOURITES PAGE - also had to have it on this page... 
  const saveToLocalStorage = (items) => {
    localStorage.setItem('favourites', JSON.stringify(items))
  }
  //END
 
  // Trying to stop duplicate movies added to faves 
   const AddFavouriteMovie = (movie) => {
      if(movie.id === movie){
        return false;
      }else{
        const newFavouriteList = [...favourites, movie]
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
      }
   }
//COPIED TO FAVOURITES
  //  const removeFavouriteMovie = (movie) => {
  //     const newFavouriteList = favourites.filter(
  //       (favourite) => favourite.movie_id !== movie.movie_id // movie_id taken directly from the DB
  //     );
  //     setFavourites(newFavouriteList);
  //     saveToLocalStorage(newFavouriteList);
  //  }
  //END

  return (
    <main>
        <SubNav />
          <div>
            {/* COPIED TO FAVOURITES */}
            {/* <MovieList popularMovies={favourites} handleFavouritesClick={removeFavouriteMovie} favouriteComponent = {RemoveFavourites}/> */}
            {/* END */}
          </div>
          <div>
            <h1>{sort}</h1>
            <MovieList popularMovies={popularMovies} handleFavouritesClick={AddFavouriteMovie} favouriteComponent = {AddFavourites}/>
          </div>
    </main>
  );
}
Home.defaultProps = {
  checkFav: true
}

export default Home;