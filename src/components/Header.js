// HEADER //
import { Link } from 'react-router-dom';
import Nav from './Nav';
import banner from '../images/cinema2-myke-simon-unsplash.jpg';

function Header() {

  return (
    <header>
      <div id="header" className="banner-container">
        <img className="img-banner" src={banner} alt="Cinema entrance with neon signs"/>
      </div>
      <div className="header-content">
        <div className='nav-wrapper'>
          <h1><Link to={'/'}>CINEFLIX</Link></h1>
          <Nav />
        </div>
      </div>
    </header>
  );
}

export default Header;