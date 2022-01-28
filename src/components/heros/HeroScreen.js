import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getHerosById } from '../../selectors/hero/getHerosById';

export const HeroScreen = () => {

  const { id } = useParams();
  const hero = getHerosById(id);

  if (!hero) {
    return <Navigate to="/" />
  }

  return (
    <>
      <h2>{hero.superhero}</h2>
    </>
  );
};
