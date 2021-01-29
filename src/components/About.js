// ABOUT PAGE //
import { Link } from 'react-router-dom';
import Scroll from './ScrollTop';

function About() {

  return (
    <main >
      <div className="about-wrapper">
        <div className="vl-left"></div>
        <div className="vl-right"></div>
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
      <aside className="attribution-container">
          <p className="attribution">This product uses the TMDb API, but it not endorsed or certified by TMDb.</p> 
          {/* <MovieLogo className="movie-logo"/> */}
          <img className="movie-database-logo" src={`./images/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648-(1).png`} /> :
        </aside>
      <Scroll />
    </main>
  );
}
export default About;