// FAVOURITES PAGE //
import '../styles/partials/_favourites.scss';
import MovieList from './MovieList';
import { useEffect, useState } from 'react';
import FavouriteButton from './FavouritesButton';
import { Link } from 'react-router-dom';
import AddFavouriteMovie from './Home';
import Scroll from './ScrollTop';

function Favourites() {

  const [favourites, setFavourites] = useState([]);

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
       (favourite) => favourite.id !== movie.id 
     );
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
  }

  return (
    <main>
      <div className="vl-left"></div>
      <div className="vl-right"></div>
      <div className="no-favourites-wrapper">
          {favourites.length === 0 ?
            <div className="no-favourites-container"> 
              <h1>Favourites</h1>
                <p className="no-fave-text">Oops! No movies have been added. Navigate back <Link to={'/'} className="home-link">Home</Link> to add a fave movie!</p>
                <img className="film-reel-icon" src="../images/icons8-popcorn-48.png" alt ="Movie reel icon" />
            </div> : 
            <div className="favourites-wrapper">
              <h1 className="favourites-title">Favourites</h1>
              <MovieList popularMovies={favourites} handleFavouritesClick={removeFavouriteMovie} />
            </div>
          }
      </div>
      <Scroll />
    </main>
    
  );
}


export default Favourites;