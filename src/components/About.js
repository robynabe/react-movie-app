// ABOUT PAGE //
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <main className="about-wrapper">
      <button className="return-home-btn">
        <NavLink to={'/'}><i class="fas fa-step-backward"></i></NavLink>
      </button>
      <div className="about-container">
        <section className="welcome-message">
        <h1>Welcome!</h1>
        <h2>About Cineflix</h2>
      </section>
      <section className="welcome-info">
        <p>Cineflix is a movie database that allows users to browser the most recent upcoming and newly released
          movies based on their popularity and rating. Read about all trending movies and add them to your 
          <a className="inline-a"> favourites</a> page to save for later!
        </p>
        <img className="film-reel-icon" src="../images/icons8-film-reel-64.png" />
      </section>
      </div>
    </main>
  );
}

export default About;