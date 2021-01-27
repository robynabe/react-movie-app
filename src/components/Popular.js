import React from 'react';
import { Link } from 'react-router-dom';
import { shortenPars } from '../utilities/CharacterLimit';
import AddFavourites from './AddFavourites';
import noPoster from '../images/poster-holder.jpg';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    // function fillHeart() {
    //     alert('hello');
    // }
    return (
        <div className="featured-movies">
            {props.popularMovies.map((movie, index) => (
                <div key={index} className="movie-info">

                    {movie.poster_path !== null ?
                        <img className="movie-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} poster`}/> :
                        <img className="no-poster-image" src={noPoster} />
                    }

                    <div className="overview">
                        <h5>{movie.title}</h5>
                        
                        <p><i className="fas fa-star"></i> {movie.vote_average}</p>
                        <p>Released {movie.release_date}</p>
                        <h6>Overview</h6>
                        <p>{shortenPars(movie.overview)} 
                        <Link className="more-info-link" to={`/individual/${movie.id}`}>More info</Link>
                        </p>
                        <button onClick={()=> props.handleFavouritesClick(movie)} className="fav-btn">
                            <AddFavourites />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MovieList;