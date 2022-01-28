import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { getHerosByName } from '../../selectors/hero/getHerosByName';
import { HeroCard } from '../heros/HeroCard';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const query = queryString.parse(location.search);
  const { q = '' } = query;

  const initialValues = {
    inputSearch: q
  };

  const [{ inputSearch }, handleInputChange] = useForm(initialValues);
  const heroesFiltered = useMemo(() => getHerosByName(q), [q]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    navigate(`?q=${inputSearch}`);
  }
  return (
    <div className="row">
      <div className="col-12">
        <h2>Search</h2>
        <hr />
      </div>

      <div className="col-12 col-sm-6 m-auto my-5">
        <form className="" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="inputSearch"
              className="form-control"
              placeholder="Search a hero"
              autoComplete="off"
              value={inputSearch}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn btn-outline-primary"
            >
              Search
            </button>
          </div>
        </form>
      </div>


      <div className="col-12">
        <h2>Heros</h2>
        <hr />

        {
          q === ''
            ? <div className="alert alert-info">Search a hero</div>
            : (heroesFiltered.length === 0)
              && <div className="alert alert-danger">Not hero to match: <span className="fw-bold">{q}</span></div>
        }

        <div className="row">
          {
            heroesFiltered.map(hero => (
              <HeroCard
                key={hero.id}
                {...hero}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};
