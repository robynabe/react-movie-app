// FAVOURITES PAGE //
import '../styles/partials/_favourites.scss';
import { NavLink } from 'react-router-dom';
import MovieList from './Popular';
import { useEffect, useState } from 'react';
import AddFavourites from './AddFavourites';
import RemoveFavourites from './RemoveFavourites';
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
       (favourite) => favourite.movie_id !== movie.movie_id // movie_id taken directly from the DB
     );
     setFavourites(newFavouriteList);
     saveToLocalStorage(newFavouriteList);
  }


  
  return (
    <main>

      <h1>Favourites</h1>
      <MovieList popularMovies={favourites} handleFavouritesClick={removeFavouriteMovie} favouriteComponent = {RemoveFavourites}/>
        {/* <h2 id="fav-title">This is the favourites page</h2> */}
        {/* <div className="fav-wrapper">
          <button className="return-home-btn">
            <NavLink to={'/'}><i class="fas fa-step-backward"></i></NavLink>
          </button>
            <div className="fav-container">
              <h1 id="main-title">Oh no!</h1>
              <h2 id="output">There are no movies currently saved in your favourites. Please return to the home page to add a favourite movie!</h2>
              <img src="../images/popcorn.png" alt="Popcorn" className="popcorn"></img>
            </div>
        </div>
        <div>
        <section className="movie-section">
          <div className="movie-info">
              <img className="movie-image" id='soul-image' src="../images/soul-image-placeholder.jpg"/>
              <div className="overview">
                <h3>Soul</h3>
                <p><i className="fas fa-star"></i> 4.0</p>
                <h4>Overview</h4>
                <p>Joe Gardner is a middle school teacher with a love for jazz music. After a successful gig at the Half Note Club, 
                  he suddenly gets into an accident that separates his soul... <a href="/">more info</a></p>
                    <button className="far fa-heart favourite" ></button>
              </div>
            </div>
          </section>
        </div> */}
            {/* <div>
             <MovieList movies={favourites} handleFavouritesClick={AddFavouriteMovie} favouriteComponent = {AddFavourites}/>
          </div> */}
    </main>
    
  );
}

export default Favourites;