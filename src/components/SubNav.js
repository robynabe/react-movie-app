// Form Navigation
import { NavLink } from 'react-router-dom';

function SubNav() {
  return (
    <nav className="sub-nav">
          <NavLink to={'/'} sort={'popular'}><button className="select-btn">Popular</button></NavLink>
          <NavLink to={'/sort/now-playing'} sort={'now_playing'}><button className="select-btn">Now Playing</button></NavLink>
          <NavLink to={'/sort/top-rated'} sort={'top_rated'}><button className="select-btn">Top Rated</button></NavLink>
          <NavLink to={'/sort/upcoming'} sort={'upcoming'}><button className="select-btn">Upcoming</button></NavLink>
    </nav>
  );
}

export default SubNav;