// INDIVIDUAL PAGE //
import { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import FavouritesButton from './FavouritesButton';
import Scroll from './ScrollTop';
import noImage from '../images/no-image-available.png';

function Individual(props) {
    const API_KEY = '80b08b43125772f29e329b06bba72a9c';

    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect( () => {

        const getSingleMovie = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits`);
            let data = await response.json();
            console.log(data);
            setMovie(data);
        }
        getSingleMovie();

    },[id]);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('favourites', JSON.stringify(items))
    } 

    const getFavsFromStorage = () => {
        let favsFromStorage = localStorage.getItem('favourites');
        if(!favsFromStorage){
            favsFromStorage = [];
        }else{
            favsFromStorage = JSON.parse(favsFromStorage);
        }
        return favsFromStorage;
    }

    const AddFavouriteMovie = (movie) => {
            const newFavouriteList = [...getFavsFromStorage(), movie]
            saveToLocalStorage(newFavouriteList);
    }

    const deleteFavourites = (id) => {
        const favsFromStorage = getFavsFromStorage()
        const indexOfMovieToRemove = favsFromStorage.findIndex(movie => movie.id === id);
        // Remove movie from favs array
        favsFromStorage.splice(indexOfMovieToRemove, 1);
        saveToLocalStorage(favsFromStorage);
    }

    const getDirectors = (movie) => {
        let directors = movie.credits.crew.filter(crewMember => crewMember.job === 'Director');
        //console.log(directors);
        if(directors.length === 0){

            return (
                <p>No directors currently listed...</p>
            )

        } else {

            directors = directors.map(director => director.name);
            return directors.map(director => <p>{director}</p>);

            }
        }

    const getProducer = (movie) => {
        let producer = movie.credits.crew.filter(crewMember => crewMember.job === 'Producer');
        //console.log(producer);
        if(producer.length === 0){

            return (
                <p>No producers currently listed...</p>
            )

        } else {

            producer = producer.map(producer => producer.name);
            return producer.map(producer => <p>{producer}</p>);

            }
        }

return (
    <main>
        <div className="vl-left"></div>
        <div className="vl-right"></div>
        {movie !== null &&
            <div className="movie-individual-container">
                <div className="movie-poster-individual">
                    {movie.backdrop_path !== null ?
                        <img className="single-movie-image" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/> :
                        <img className="single-movie-image" src={noImage}/>
                    }
                    <h1 className="individual-movie-title">{movie.title}</h1>
                </div>
                <div className="movie-individual-wrapper">
                    <div className="movie-info-individual">
                        <div className="rating-release">
                            <p className="release-date-individual">{movie.release_date}</p>
                            <div className="rate-heart">
                                <p><i className="fas fa-star"></i> {movie.vote_average}</p>
                                <div className="fav-btn-individual">
                                    <FavouritesButton movie={movie}  handleAddFavourites={AddFavouriteMovie} handleDeleteFavourites={deleteFavourites}/>
                                </div>
                            </div>
                        </div>
                        <div className="small-container">
                            <h5>Synopsis</h5>
                            <p>{movie.overview}</p>
                            <h6>Cast</h6>
                            <ul className="cast-list">
                                {movie.credits.cast.map((person, index) => {
                                    if(person.order < 5) {
                                    return <li key={index} className="list-item">{person.name}</li> 
                                    }
                                })} 
                            </ul>
                            <h6>Producers</h6>
                            <div className="producer-list">
                                {getProducer(movie)}
                            </div>
                            <h6>Director</h6>
                            <div className="director-list">
                                {getDirectors(movie)}
                            </div>
                            <hr></hr>
                            <div className="genre-run-time">
                                <ul className="genre-list">
                                    {movie.genres.map((genre, g) =>
                                    <li key={g} className="list-item">{genre.name}</li>)}
                                </ul>
                                <p>{movie.runtime} min</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        }  
        <Scroll />  
    </main>
);
}
export default Individual;