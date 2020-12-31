import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
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