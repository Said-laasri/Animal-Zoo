import './Header.scss';

const Header = () => (
  <div className="header">
    <h1>Animal ZOO</h1>
    <div>
      <h2 className="search">Search</h2>
      <input className="input" type="text" placehlder="Country" />
    </div>
  </div>
);

export default Header;
