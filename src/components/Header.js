// HEADER //
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Search from './Search';
import { useState, useEffect } from 'react';
import banner from '../images/cinema2-myke-simon-unsplash.jpg';

function Header() {
  const API_KEY = '80b08b43125772f29e329b06bba72a9c';

  const [searchValue, setSearchValue] = useState('');

  const getRequest = async (searchValue) => {
    const url = `https://api.themoviedb.org/3/search/${searchValue}?api_key=${API_KEY}&language=en-US&page=1`;

    const response = await fetch(url);
    const responseJson = await response.json();

      if(responseJson.Search) {
        setSearchValue(responseJson.Search);
      }
    }

  // Request will get called only when the page loads
  useEffect(() => {
      getRequest(searchValue);
   }, [searchValue]);

  return (
    <header>
      <div className="banner-container">
        <img className="img-banner" src={banner} alt="Cinema entrance with neon signs"/>
      </div>
      <div className="header-content">
        <div className='nav-wrapper'>
          <h1><Link to={'/'}>CINEFLIX</Link></h1>
          <Nav />
        </div>
        <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      </header>
  );
}

export default Header;