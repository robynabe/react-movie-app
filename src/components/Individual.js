// INDIVIDUAL PAGE //
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddFavourites from './AddFavourites';

function Individual() {
    const API_KEY = '80b08b43125772f29e329b06bba72a9c';
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect( () => {
            const getSingleMovie = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits`);
            // https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US
            let data = await response.json();
            setMovie(data);
            console.log(data.poster_path);
        };
        getSingleMovie();
    }, [id]);

    return (

        <main>
            <button className="return-home-btn">
            <Link to={'/'}><i className="fas fa-step-backward"></i></Link>
            </button>
                {movie !== null &&
                    <div className="movie-poster-individual">
                        <img className="single-movie-image" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/>
                            <AddFavourites />
                        <div className="movie-info-individual">
                    <h2>{movie.title}</h2>
                <h3>{movie.release_date}</h3>
                    <h3>{movie.genre}</h3>
                            <h5>{movie.runtime} min</h5>
                            </div>
                        <p><i className="fas fa-star"></i> {movie.vote_average}</p>
                    <h4>Synopsis</h4>
                <p>{movie.overview}minutes</p>
                    {/* Create Loop and Output Following */}
                        <h4>Cast</h4>
                            <p>cast list (this will also be an object)</p>
                        <h4>Producers</h4>
                    <p>Kate Croser, Jason Taylor, Lisa Shaunessy</p>
                <h4>Director(s)</h4>
                    <p>Seth Larney</p>
                </div>
                }
        </main>
    );
}

export default Individual;