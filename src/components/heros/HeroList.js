import React from 'react';
import PropTypes from 'prop-types';

import { getHerosByPublisher } from '../../selectors/hero/getHerosByPublisher';
import { HeroItem } from './HeroItem';

export const HeroList = ({ publisher }) => {

  const heroes = getHerosByPublisher(publisher);

  return (
    <div className="row">
      {
        heroes.map(hero => (
          <HeroItem
            key={hero.id}
            { ...hero }
          />
        ))
      }
    </div>
  );
};

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired
}
