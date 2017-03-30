import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { footer } from '../styles/footer.scss';

const App = ({ children }) =>
  <div>
    <h1>Prime Systems Catalog</h1>
    { children }
    <footer className={footer}>
      <Link to="/">Catalog</Link>
      <Link to="/desktops">Desktops</Link>
      <Link to="/laptops">Laptops</Link>
      <Link to="/components">Components</Link>
      <Link to="/accessories">Accessories</Link>
      <Link to="/pre-owned">Pre-Owned</Link>
      <Link to="/search">Search</Link>
    </footer>
  </div>;

App.propTypes = {
  children: PropTypes.object
};

export default App;
