import React from 'react';
import { Link } from 'react-router-dom';

export const HeroItem = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}) => {

  const imagePath = `/images/heroes/${id}.jpg`;

  return (
    <div className="col-12 col-lg-6">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-4">
            <img src={imagePath} className="img-fluid rounded-start" alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {
                (alter_ego !== characters)
                  && <p className="card-text"><small className="text-muted">{characters}</small></p>
              }
              <p className="card-text"><small>{first_appearance}</small></p>
              <Link to={`/hero/${id}`}>
                  Ver más...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
