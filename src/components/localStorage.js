import Home from '../components/Home';

const createFavouriteStorage = document.getElementsByClassName('favourite');
const output = document.getElementById('output');
const favouriteMovie = localStorage.getItem('favMovie');

if(!favouriteMovie){
    output.innerHTML = "No favourites set";

}else{
    output.innerHTML = `Favourite movie from storage: ${favouriteMovie}`;
}

createFavouriteStorage.addEventListener('click', function(){
    let movie = prompt ('What is your favourite movie?');

    while(movie === null || movie.trim() === ''){

        movie = prompt('Please add a valid movie...')
    }
});