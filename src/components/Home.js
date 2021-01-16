// HOME PAGE //
import { useState, useEffect } from 'react';
//import { getElementError } from "@testing-library/react"; @Olivia, did you add this? Robyn and I were trying to figure out what this was! 

function Home() {
  const API_KEY = '80b08b43125772f29e329b06bba72a9c';
  //const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  
  const [popularMovies, setPopularMovies] = useState(null);
  const fetchPopularMovies = async () =>{
    const popular_movie_data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const popular_movie_response = await popular_movie_data.json();
    setPopularMovies(popular_movie_response.results);
    console.log(popular_movie_response.results);
  }
  //fetchPopularMovies();

  // const fetchMovieTitle = async () => {
  //   const results = await fetch(API_URL);
  //   let data = await results.json();
  //   console.log(data.results); // Gives you all the info about every movie that starts with Soul
  // }

  // fetchMovieTitle();
  useEffect(() => {
    fetchPopularMovies();
  } , [] )

  let initialMovieArray = [];
  //let favouriteMovies = localStorage.getItem('favMovies');
  const movieObj = [];
  movieObj.title = 'Soul';
  movieObj.poster = '...';
  initialMovieArray = JSON.stringify(movieObj)

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
                he suddenly... <a href="/">more info</a></p>
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
                foe by... <a href="/">more info</a></p>
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
                ship... <a href="/">more info</a></p>
                <button className="far fa-heart favourite" onClick={addToFavourites}></button>
            </div>
          </div>
        </section>
    </main>
  );
}

export default Home;