// FAVOURITES PAGE //
import '../styles/partials/_favourites.scss';
import MovieList from './MovieList';
import { useState } from 'react';
import FavouriteButton from './FavouritesButton';
import { Link } from 'react-router-dom';
import AddFavouriteMovie from './Home';
import Scroll from './ScrollTop';

function Favourites() {

  let favsFromStorage = localStorage.getItem('favourites');
  if(!favsFromStorage){
      favsFromStorage = [];
  }else{
      favsFromStorage = JSON.parse(favsFromStorage);
  }

  const [favourites, setFavourites] = useState(favsFromStorage);

    // useEffect(() => {
    //   const movieFavourites = JSON.parse(
    //   localStorage.getItem('favourites')
    // );
    //   setFavourites(movieFavourites);
    // }, []);

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
  console.log('remove favourites')
  const indexOfMovieToRemove = favourites.findIndex(movie => movie.id === id);
  console.log(indexOfMovieToRemove)
  let tempArray = [...favourites];
  tempArray.splice(indexOfMovieToRemove, 1);
  console.log(tempArray)
  setFavourites(tempArray);
  saveToLocalStorage(tempArray);
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
                <MovieList  popularMovies={favourites} handleAddFavourites={AddFavouriteMovie} handleDeleteFavourites={deleteFavourites} />
            </div>
          }
      </div>
      <Scroll />
    </main>
    
  );
}


export default Favourites;