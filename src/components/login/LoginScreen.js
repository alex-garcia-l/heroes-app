import React from 'react';
import { useNavigate } from 'react-router-dom';

import './login.css';

export const LoginScreen = () => {

  const navigate = useNavigate();
  const date = new Date();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    navigate('/', {
      replace: true
    });
  }

  return (
    <div className="text-center d-flex align-items-center vh-100">
      <main className="form-signin">
        <form onSubmit={handleSubmit}>
          <img className="mb-4" src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
          >
            Sign in
          </button>

          <p className="mt-5 mb-3 text-muted">© {date.getFullYear()}</p>
        </form>
      </main>
    </div>
  );
};
