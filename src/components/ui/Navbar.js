import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

  const navigate = useNavigate();

  const handleClick = (evt) => {
    evt.preventDefault();
    navigate('/login', {
      replace: true
    });
  }
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none me-0 me-md-4">
            <span className="fs-4">Heroes App</span>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `nav-link px-2 ${(isActive) ? 'text-secondary' : 'text-white'}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/marvel"
                className={({ isActive }) => `nav-link px-2 ${(isActive) ? 'text-secondary' : 'text-white'}`}
              >
                Marvel
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dc"
                className={({ isActive }) => `nav-link px-2 ${(isActive) ? 'text-secondary' : 'text-white'}`}
              >
                Dc
              </NavLink>
            </li>
          </ul>

          <div className="text-end">
            <span className="me-4">Name</span>
            <button
              type="button"
              className="btn btn-outline-light me-2"
              onClick={handleClick}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
