// HEADER //
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Header() {
  return (
    <header>
      <img className="img-banner" src="../images/cinema-felix-mooneeram-unsplash.jpg" alt="movie theatre seats"/>
      <div className='nav-wrapper'>
        <h1><Link to={'/'}>CINEFLIX</Link></h1>
        <Nav />
      </div>
      <div className='search-bar'>
        <form action='/'>
          <input 	type="text" 
				          name="search" 
				          id="search" 
				          placeholder="search flix..." />
          <input type="submit" id="submit" value="Search" />
        </form>
      </div>
    </header>
  );
}

export default Header;