import React from 'react';

import { HeroList } from '../heros/HeroList';

export const DcScreen = () => {
  return (
    <>
      <h2>DC Heros</h2>
      <hr />
      <HeroList publisher="DC Comics" />
    </>
  );
};
