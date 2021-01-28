// ABOUT PAGE //
import { Link } from 'react-router-dom';
import Scroll from './ScrollTop';

function About() {

  return (
    <main >
      <div className="about-wrapper">
        <div class="vl-left"></div>
        <div class="vl-right"></div>
        <div className="about-container">
            <section className="welcome-message">
            <h2 className="about-title">About Cineflix</h2>
          </section>
          <section className="welcome-info">
            <p>Cineflix is a movie database that allows users to browser the most recent upcoming and newly released
              movies based on their popularity and rating. Read about all trending movies and add them to your  
              <Link className="inline-a" to={'/favourites'}> Favourites</Link> page to save for later!
            </p>
            <img className="film-reel-icon" src="../images/icons8-film-reel-65.png" alt ="Movie reel icon" />
          </section>          
        </div>
      </div>
      <aside>
          <p>This prodcut uses the TMDb API, but it not endorsed or certified by TMDb</p> <span></span>
          {/* <MovieLogo className="movie-logo"/> */}
          <img className="movie-image" src={`https://image.tmdb.org/movie-app/static/media/TMDBlogo.08392f18.svg`} /> :
        </aside>
      <Scroll />
    </main>
  );
}
export default About;