// FAVOURITES PAGE //
import '../styles/partials/_favourites.scss';

function Favourites() {
  return (
    <main>
        {/* <h2 id="fav-title">This is the favourites page</h2> */}
        <div class="fav-wrapper">
          <h1 id="main-title">Oops</h1>
          <h2 id="output">There are no movies currently saved in your favourites. Please return to the home page to add a favourite movie!</h2>
          {/* <img src="../images/popcorn.jpg" alt="Popcorn"></img> */}
          {/* <button>Return</button> */}
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
        </div>
    </main>
    
  );
}

export default Favourites;