// INDIVIDUAL PAGE //
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddFavourites from './AddFavourites';
import AddFavouriteMovie from './Home';
import saveToLocalStorage from './Home';

function Individual() {
    const API_KEY = '80b08b43125772f29e329b06bba72a9c';
        const { id } = useParams();
            const [movie, setMovie] = useState(null);
                useEffect( () => {
                    const getSingleMovie = async () => {
                        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits`);
                    let data = await response.json();
                setMovie(data);
            console.log(data.genres);};
        getSingleMovie();},[id]);

// Make Cast function ??
    // function makeCast(movie){ let top5Cast = movie.credits.cast.filter(person => person.order < 5);
    //     top5Cast.sort((a,b) => a.order - b.order);
    //         top5Cast.map((person, index) => {
    //             return (
    //         <p key={index}>{person.name}</p>
    //       );
    //     }); }

        return (
            <main>
                <button className="return-home-btn">
                <Link to={'/'}><i className="fas fa-step-backward"></i></Link>
                </button>
                    {movie !== null &&
                        <div className="movie-poster-individual">
                            <img className="single-movie-image" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/>
                                <AddFavourites handleFavouritesClick={AddFavouriteMovie, saveToLocalStorage} />
                            <div className="movie-info-individual">
                        <h2>{movie.title}</h2>
                            <h3>{movie.release_date}</h3>
                                {movie.genres.map((genre) =>
                                    <li key={genre.name}>{genre.name}</li>)}
                                <h5>{movie.runtime} min</h5>
                            </div>
                            <p><i className="fas fa-star"></i> {movie.vote_average}</p>
                        <h4>Synopsis</h4>
                            <p>{movie.overview}minutes</p>
                                <h4>Cast</h4>
                    
                        {movie.credits.cast.map((person, index) => {
                        if(person.order < 5){
                        return <p key={index}>{person.name}</p>}})} 

                        <h4>Producers</h4>
                            {movie.credits.crew.map((person, index) => {
                                <p>{person.name}</p>})}
                                    <h4>Director(s)</h4>
                                {movie.credits.crew.map((person, index) => {
                            <p>{person.name}</p>})}
                    </div>
                    }
            </main>

            
        );
    }

    export default Individual;