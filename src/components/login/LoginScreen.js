import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../auth/authContext';
import { authType } from '../../types/auth';
import './login.css';

export const LoginScreen = () => {

  const navigate = useNavigate();
  const date = new Date();
  const { userDispatch } = useContext(AuthContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const action = {
      type: authType.login,
      payload: {
        name: 'My name'
      }
    }

    userDispatch(action);
    const lastPath = localStorage.getItem('last_path') || '/home';

    navigate(lastPath, {
      replace: true
    });
  }

  return (
    <div className="text-center d-flex align-items-center vh-100">
      <main className="form-signin">
        <form onSubmit={handleSubmit}>
          <img className="mb-4" src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          {/* <div className="form-floating">
            <input type="text" className="form-control" placeholder="Name" />
            <label htmlFor="floatingInput">Name</label>
          </div>

          <div className="form-floating">
            <input type="password" className="form-control" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div> */}

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
