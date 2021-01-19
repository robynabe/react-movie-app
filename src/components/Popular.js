import React from 'react';

const MovieList = (props) => {

    return (
        <div className="featured-movies">
            {props.movies.map((movie, index) => (
                <div key={index} className="movie-info">
                    <img className="movie-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                    <div className="overview">
                        <h3>{movie.title}</h3>
                        <p><i className="fas fa-star"></i> {movie.vote_average}</p>
                        <h4>Overview</h4>
                        <p>{movie.overview} <a href="/">more info</a></p>
                            <button className="far fa-heart favourite" /*onClick={addToFavourites}*/></button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MovieList;