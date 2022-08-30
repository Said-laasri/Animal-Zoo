import { NavLink } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';
import './Header.scss';

const Header = () => (
  <div className="header">
    <h1>Animal ZOO</h1>
    <h2>Search</h2>
    <input type="text" placehlder="Country" />
    <NavLink to="/">
      <FcHome className="home" />
    </NavLink>
  </div>
);

export default Header;
