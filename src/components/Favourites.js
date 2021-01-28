// FAVOURITES PAGE //
import '../styles/partials/_favourites.scss';
import MovieList from './Popular';
import { useEffect, useState } from 'react';
//import AddFavourites from './AddFavourites';
import RemoveFavourites from './RemoveFavourites';
import { Link } from 'react-router-dom';
//import AddFavouriteMovie from './Home';

function Favourites() {

  const [favourites, setFavourites] = useState([]);
  //const [popularMovies, setPopularMovies] = useState([]);
   // This is working all of a sudden... 
   useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('favourites')
    );
    setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
   localStorage.setItem('favourites', JSON.stringify(items))
  }

  const removeFavouriteMovie = (movie) => {
     const newFavouriteList = favourites.filter(
       (favourite) => favourite.id !== movie.id // movie_id taken directly from the DB
     );
     setFavourites(newFavouriteList);
     saveToLocalStorage(newFavouriteList);
  }


  
  return (
    <main>
      <div className="no-favourites-wrapper">
        <h1>Favourites</h1>
        {favourites.length === 0 ?
          <div className="no-favourites-container"> 
            <p className="no-fave-text">Oops! No movies have been added. Navigate back <Link to={'/'} className="home-link">Home</Link> to add a fave movie!</p>
            <img className="film-reel-icon" src="../images/icons8-popcorn-48.png" alt ="Movie reel icon" />
          </div> : 
          <MovieList popularMovies={favourites} handleFavouritesClick={removeFavouriteMovie} favouriteComponent = {RemoveFavourites}/>
        }
      </div>
      
    </main>
    
  );
}

// const updatedLocalStorage = movieFavourites.JSON.parse()

// function isFav(id){

//   if(updatedLocalStorage.favs.length === 0){
//     return false;
//   }
//   // checks whether the movie is in the favs movie
//   // array...
//   return updatedLocalStorage.favs.some((movie) => movie.id === id);

// }

export default Favourites;