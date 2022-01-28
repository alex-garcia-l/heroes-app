import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { getHerosByPublisher } from '../../selectors/hero/getHerosByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => getHerosByPublisher(publisher), [publisher]);;

  return (
    <div className="row animate__animated animate__fadeIn">
      {
        heroes.map(hero => (
          <HeroCard
            key={hero.id}
            {...hero}
          />
        ))
      }
    </div>
  );
};

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired
}
