import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../Components/Cart';

export default function Navigation() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/other-page">
                Other Page
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/private-page">
                Private Page
              </Link>
            </li>
          </ul>
          <span className="navbar-text">
            <Cart />
          </span>
        </div>
      </nav>
    </React.Fragment>
  );
}
