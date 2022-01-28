import { heroes } from '../../data/heroes';

export const getHerosByName = (name = '') => {

  if (name === '') {
    return [];
  }

  if (name === 'all') {
    return [...heroes];
  }

  name = name.toLowerCase();
  const heroesFiltered = heroes.filter(hero => hero.superhero.toLowerCase().includes(name));

  return [...heroesFiltered];
}