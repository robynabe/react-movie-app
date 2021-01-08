// HOME PAGE //
function Home() {
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
              <p><i class="fas fa-star"></i> 4.0</p>
              <h4>Overview</h4>
              <p>Joe Gardner is a middle school teacher with a love for jazz music. After a successful gig at the Half Note Club, 
                he suddenly gets into an accident that separates his soul... <a href="/">more info</a></p>
                  <button class="favourite" class="far fa-heart"></button>
            </div>
          </div>
          <div className="movie-info">
            <img className="movie-image" src="../images/ww84-image-placeholder.jpg"/>
            <div className="overview">
              <h3>WW84</h3>
              <p><i class="fas fa-star"></i> 5.0</p>
              <h4>Overview</h4>
              <p>Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable 
                foe by the name of the Cheetah... <a href="/">more info</a></p>
                <button class="favourite" class="far fa-heart"></button>
            </div>
          </div>
          <div className="movie-info">
            <img className="movie-image" src="../images/cosmoball-image-placeholder.jpg"/>
            <div className="overview">
              <h3>Cosmoball</h3>
              <p><i class="fas fa-star"></i> 3.0</p>
              <h4>Overview</h4>
              <p>Cosmoball is a mesmerizing intergalactic game of future played between humans and aliens at the giant extraterrestrial 
                ship hovering in the sky over Earth... <a href="/">more info</a></p>
                <button class="favourite" class="far fa-heart"></button>
            </div>
          </div>
        </section>
    </main>
  );
}

export default Home;