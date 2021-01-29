import React from 'react';
import { Link } from 'react-router-dom';
import { shortenPars } from '../utilities/CharacterLimit';
import noPoster from '../images/no-poster-available.png';
import FavouritesButton from './FavouritesButton'

const MovieList = (props) => {

    return (
        <div className="featured-movies">
            {props.popularMovies.map((movie, index) => (
                <div key={index} className="movie-info">
                    <p className="release-date">Released {movie.release_date}</p>
                    {movie.poster_path !== null ?
                        <img className="movie-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} poster`}/> :
                        <img className="no-poster-image" src={noPoster} />
                    }
                    <div key={index} className="overview">
                        <h5>{movie.title}</h5>
                        <p><i className="fas fa-star"></i> {movie.vote_average}</p>
                        <h6>Overview</h6>
                        <p>{shortenPars(movie.overview)}</p>
                        <Link className="more-info-link" to={`/individual/${movie.id}`}>More info</Link>
                        <div className="home-page-favourites-page-heart">
                        <FavouritesButton movie={movie} handleAddFavourites={props.handleAddFavourites} handleDeleteFavourites={props.handleDeleteFavourites} />
                        </div>
                    </div>
                </div>
        ))}
        </div>
    );
};

export default MovieList;