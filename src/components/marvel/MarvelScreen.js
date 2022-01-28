import React from 'react';

import { HeroList } from '../heros/HeroList';

export const MarvelScreen = () => {
  return (
    <>
      <h2>Marvel Heros</h2>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </>
  );
};
