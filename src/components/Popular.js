import React from 'react';
import { NavLink } from 'react-router-dom';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    return (
        <div className="featured-movies">
            {props.movies.map((movie, index) => (
                <div key={index} className="movie-info">
                    <img className="movie-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                    <div className="overview">
                        <h5>{movie.title}</h5>
                        <p><i className="fas fa-star"></i> {movie.vote_average}</p>
                        <h6>Overview</h6>
                        <p>{movie.overview} <NavLink to={'/individual'}>More info</NavLink></p>
                        <button onClick={()=> props.handleFavouritesClick(movie)} className="fav-btn">
                            <FavouriteComponent />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MovieList;