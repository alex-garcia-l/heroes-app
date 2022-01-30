import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHerosById } from '../../selectors/hero/getHerosById';

export const HeroScreen = () => {

  const { heroID } = useParams();
  const hero = useMemo(() => getHerosById(heroID), [heroID]);;
  const navigate = useNavigate();

  if (!hero) {
    return <Navigate to="/home" />
  }
  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;
  const imagePath = `/images/heroes/${id}.jpg`;

  const handleClick = (evt) => {
    evt.preventDefault();
    navigate(-1);
  }

  return (
    <div className="row mt-5">
      <div className="col-3 offset-2">
        <img src={imagePath} className="img-thumbnail animate__animated animate__fadeInLeft" alt={hero.superhero} />
      </div>

      <div className="col-5 animate__animated animate__fadeInRight">
        <h5>{superhero}</h5>
        <ul className="list-group mt-4">
          <li className="list-group-item">
            <span className="fw-bold">Alter Ego: </span>{alter_ego}
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Publisher: </span>{publisher}
          </li>
          <li className="list-group-item">
            <span className="fw-bold">First Appearance: </span>{first_appearance}
          </li>
        </ul>

        <h5 className="mt-5">Characters</h5>
        <p>{characters}</p>

        <button
          className="btn btn-outline-info"
          onClick={handleClick}
        >
          Regresar
        </button>
      </div>
    </div>
  );
};
