// ABOUT PAGE //

function About() {
  return (
    <main className="about-wrapper">
     <i class="arrow left"></i>
      <button id="return-home-btn">Return</button>
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
    </main>
  );
}

export default About;