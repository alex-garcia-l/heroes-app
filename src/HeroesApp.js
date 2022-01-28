import React, { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';

const init = () => {
  return JSON.parse(localStorage.getItem('userApp')) || { logged: false }
}

export const HeroesApp = () => {
  
  const [user, userDispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if (!user) {
      return;
    }
    localStorage.setItem('userApp', JSON.stringify(user));
  }, [user]);
  

  return (
    <AuthContext.Provider value={{
      user,
      userDispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
