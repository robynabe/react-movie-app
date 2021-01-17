import { NavLink } from 'react-router-dom';
import Hamburger from '../utilities/Hamburger';

function Nav() {
  return (
    <nav>
        <Hamburger />
        <ul className="nav-bar">
            <li>
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
                <NavLink to={'/favourites'}>Favourites</NavLink>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;