// Form Navigation
import { NavLink } from 'react-router-dom';

function SubNav() {
  return (
    <nav className="sub-nav">
          <button className="select-btn"><NavLink to={'/'}>Popular</NavLink></button>
          <button className="select-btn"><NavLink to={'/sort/top-rated'}>Top Rated</NavLink></button>
          <button className="select-btn"><NavLink to={'/sort/now-playing'}>Now Playing</NavLink></button>
          <button className="select-btn"><NavLink to={'/sort/upcoming'} >Upcoming</NavLink></button>
    </nav>
  );
}

export default SubNav;