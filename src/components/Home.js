// HOME PAGE //

import { getElementError } from "@testing-library/react";

function Home() {
  const API_KEY = '80b08b43125772f29e329b06bba72a9c';
  const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=soul`;

  const fetchMovieTitle = async () => {
    const results = await fetch(API_URL);
    let data = await results.json();
    console.log(data.results); // Gives you all the info about every movie that starts with Soul
  }

  fetchMovieTitle();

  let initialMovieArray = [];
  initialMovieArray = JSON.stringify(initialMovieArray)
  let favouriteMovies = localStorage.getItem('favMovies');
  let movieObj = document.getElementsByClassName('movie-info');

  function addToFavourites(event){
    event.preventDefault();
    localStorage.setItem( 'favMovies', initialMovieArray ); 
    //let favMovies = localStorage.getItem('favMovies');
    //prompt ('Add Favourite Movie');
    //favMovies = JSON.parse(favMovies);
  
    //favMovies = JSON.stringify(favMovies);
    //localStorage.setItem('favMovies', favMovies);
  }

  
  return (
    <main>
        <form className="sort-movies">
          <label htmlFor="sort-by">Sort By:</label>
          <select name="sort-by" id="sort-by">			
				    <option value="Popular">Popular</option>
            <option value="top-rated">Top Rated</option>
          </select>
        </form>
        <section className="featured-movies">
          <div className="movie-info">
            <img className="movie-image" src="../images/soul-image-placeholder.jpg"/>
            <div className="overview">
              <h3>Soul</h3>
              <p><i className="fas fa-star"></i> 4.0</p>
              <h4>Overview</h4>
              <p>Joe Gardner is a middle school teacher with a love for jazz music. After a successful gig at the Half Note Club, 
                he suddenly gets into an accident that separates his soul... <a href="/">more info</a></p>
                  <button className="far fa-heart favourite" onClick={addToFavourites}></button>
            </div>
          </div>
          <div className="movie-info">
            <img className="movie-image" src="../images/ww84-image-placeholder.jpg"/>
            <div className="overview">
              <h3>WW84</h3>
              <p><i className="fas fa-star"></i> 5.0</p>
              <h4>Overview</h4>
              <p>Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable 
                foe by the name of the Cheetah... <a href="/">more info</a></p>
                <button className="far fa-heart favourite" onClick={addToFavourites}></button>
            </div>
          </div>
          <div className="movie-info">
            <img className="movie-image" src="../images/cosmoball-image-placeholder.jpg"/>
            <div className="overview">
              <h3>Cosmoball</h3>
              <p><i className="fas fa-star"></i> 3.0</p>
              <h4>Overview</h4>
              <p>Cosmoball is a mesmerizing intergalactic game of future played between humans and aliens at the giant extraterrestrial 
                ship hovering in the sky over Earth... <a href="/">more info</a></p>
                <button className="far fa-heart favourite" onClick={addToFavourites}></button>
            </div>
          </div>
        </section>
    </main>
  );
}

export default Home;