import React from 'react';
import { Link } from 'react-router-dom';
import { shortenPars } from '../utilities/CharacterLimit';
import noPoster from '../images/poster-holder.jpg';
import AddFavourites from './AddFavourites';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    return (
        <div className="featured-movies">
            {props.popularMovies.map((movie, index) => (
                <Link to={`/individual/${movie.id}`}>
                    <div key={index} className="movie-info">
                        {movie.poster_path !== null ?
                            <img className="movie-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} poster`}/> :
                            <img className="no-poster-image" src={noPoster} />
                        }
                        <div key={index} className="overview">
                            <h5>{movie.title}</h5>
                            <p><i className="fas fa-star"></i> {movie.vote_average}</p>
                            <p>Released {movie.release_date}</p>
                            <h6>Overview</h6>
                            <p>{shortenPars(movie.overview)}</p>
                            <Link className="more-info-link" to={`/individual/${movie.id}`}>More info</Link>
                            <button onClick={()=> props.handleFavouritesClick(movie)} className="fav-btn">
                                <AddFavourites />
                            </button>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MovieList;