// INDIVIDUAL PAGE //
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddFavourites from './AddFavourites';
import FavouriteButton from './FavouritesButton';
// import AddFavouriteMovie from './Home';
// import saveToLocalStorage from './Home';

function Individual(props) {
    const API_KEY = '80b08b43125772f29e329b06bba72a9c';

    const [favourites, setFavourites] = useState([]);
    const FavouriteComponent = props.favouriteComponent;

    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect( () => {
            const getSingleMovie = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits`);
            let data = await response.json();
            console.log(data);
            setMovie(data);}
            getSingleMovie();
            },[id]);

    // Make Cast function
    function makeCast(movie){ let top5Cast = movie.credits.cast.filter(person => person.order < 5);
        top5Cast.sort((a,b) => a.order - b.order);
            top5Cast.map((person, index) => {
                return (
            <p key={index}>{person.name}</p>
          );
        }); }

        /*
        useEffect(() => {
            let movieFavourites = localStorage.getItem('favourites')
            if (movieFavourites === null){
              movieFavourites = [];
            }else{
              movieFavourites = JSON.parse(movieFavourites);
            }
            setFavourites(movieFavourites);
         },[]);
         */
    
        const saveToLocalStorage = (items) => {
          localStorage.setItem('favourites', JSON.stringify(items))
        }

        // Trying to stop duplicate movies added to faves 
            const AddFavouriteMovie = (movie) => {
            // if(useState.movieFavourites.some((movie) => movie.id === movie.id)){
            const newFavouriteList = [...favourites, movie]
            setFavourites(newFavouriteList);
            saveToLocalStorage(newFavouriteList);
            console.log(movie.id)
         }

        const getDirectors = (movie) => {
        let directors = movie.credits.crew.filter(crewMember => crewMember.job === 'Director');
        console.log(directors);
        if(directors.length === 0){
        return (
        <p>No directors currently listed...</p>
        )
        }else{
            directors = directors.map(director => director.name);
            return directors.map(director => <p>{director}</p>);
            }
        }

        const getProducer = (movie) => {
            let producer = movie.credits.crew.filter(crewMember => crewMember.job === 'Producer');
            console.log(producer);
            if(producer.length === 0){
                return (
                    <p>No producers currently listed...</p>
                )
            }else{
                producer = producer.map(producer => producer.name);
                return producer.map(producer => <p>{producer}</p>);
                }
            }
        return (
            <main>
                {movie !== null &&
                    <div class="movie-individual-container">
                        {/* Movie Poster Div */}
                        
                            <div className="movie-poster-individual">
                                <img className="single-movie-image" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/>
                                <h1 className="individual-movie-title">{movie.title}</h1>
                                {/* <img className="single-movie-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/> */}
                            </div>
                        <div className="movie-individual-wrapper">
                            <div className="movie-info-individual">
                                <div className="rating-release">
                                    <p className="release-date">{movie.release_date}</p>
                                    <p><i className="fas fa-star"></i> {movie.vote_average}</p>
                                    <button onClick={()=> AddFavouriteMovie(movie)} className="fav-btn-individual">
                                        <AddFavourites />
                                    </button>
                                </div>
                                <div className="small-container">
                                    
                                        <h5>Synopsis</h5>
                                        <p>{movie.overview}</p>
                                        <h6>Cast</h6>
                                        <ul className="cast-list">
                                            {movie.credits.cast.map((person, index) => {
                                                if(person.order < 5){
                                                return <li key={index} className="list-item">{person.name}</li> 
                                                }
                                            })} 
                                        </ul>
                                    <h6>Producers</h6>
                                    <div class="producer-list">
                                        {getProducer(movie)}
                                    </div>
                                    <h6>Director</h6>
                                    <div className="director-list">
                                        {getDirectors(movie)}
                                    </div>
                                    <hr></hr>
                                    <div className="genre-run-time">
                                        <ul className="genre-list">
                                            {movie.genres.map((genre) =>
                                            <li key={genre.name} className="list-item">{genre.name}</li>)}
                                        </ul>
                                        <p>{movie.runtime} min</p>
                                    </div>

                                </div>
                                
                                    
                                
                            </div>
                        </div>
                    </div>
                }
                  {/* <button onClick={()=> AddFavouriteMovie(movie)} className="fav-btn">
                      <FavouriteComponent handleFavouritesClick={AddFavouriteMovie} favouriteComponent = {AddFavourites} />
                      </button>
                  */}     
            </main>
        );
    }
export default Individual;