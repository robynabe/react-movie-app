// ABOUT PAGE //
import { Link } from 'react-router-dom';

function About() {

  return (
    <main className="about-wrapper">
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
        <aside>
          <p>This prodcut uses the TMDb API, but it not endorsed or certified by TMDb *insert logo here*</p>
        </aside>
          
      </div>
    </main>
  );
}

export default About;