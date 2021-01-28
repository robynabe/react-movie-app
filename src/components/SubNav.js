// Form Navigation
import { NavLink } from 'react-router-dom';

function SubNav() {
  return (
    <nav className="sub-nav">
          <button className="select-btn"><NavLink to={'/'} sort={'popular'}>Popular</NavLink></button>
          <button className="select-btn"><NavLink to={'/sort/now-playing'} sort={'now_playing'}>Now Playing</NavLink></button>
          <button className="select-btn"><NavLink to={'/sort/top-rated'} sort={'top_rated'}>Top Rated</NavLink></button>
          <button className="select-btn"><NavLink to={'/sort/upcoming'} sort={'upcoming'}>Upcoming</NavLink></button>
    </nav>
  );
}

export default SubNav;