// HOME PAGE //

function Home() {
  return (
    <main>
        <form>
          <label htmlFor="sort-by">Sort By:</label>
          <select name="sort-by" id="sort-by">			
				    <option value="Popular">Popular</option>
            <option value="top-rated">Top Rated</option>
          </select>
        </form>
        <section className="movies">
          <div className="movie-info">Image and Info</div>
          <div className="movie-info">Image and Info</div>
          <div className="movie-info">Image and Info</div>
          <div className="movie-info">Image and Info</div>
          <div className="movie-info">Image and Info</div>
          <div className="movie-info">Image and Info</div>
        </section>
    </main>
  );
}

export default Home;