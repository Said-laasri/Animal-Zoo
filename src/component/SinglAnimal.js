import { PropTypes } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDoubleRight } from 'react-icons/bs';

const SinglAnimal = (props) => {
  const {
    id,
    name,
    image,
    latinName,
    type,
    active,
    minWeigth,
    maxWeigth,
    minLength,
    maxLength,
    life,
    habitat,
    diet,
    geoRange,
  } = props;

  return (
    <div>
      <img className="image-animal" src={image} alt="animal-name" />
      <div>
        <Link
          to={`/more/${id}`}
          state={{
            id,
            name,
            latinName,
            image,
            type,
            active,
            minWeigth,
            maxWeigth,
            minLength,
            maxLength,
            life,
            habitat,
            diet,
            geoRange,
          }}
        >
          <button type="button" id={id}>
            <BsChevronDoubleRight />
          </button>
        </Link>
        <h2>
          Name:
          {name}
        </h2>
        <h3>
          Latin:
          {latinName}
        </h3>
      </div>
    </div>
  );
};

SinglAnimal.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  latinName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  minWeigth: PropTypes.number.isRequired,
  maxWeigth: PropTypes.number.isRequired,
  minLength: PropTypes.number.isRequired,
  maxLength: PropTypes.number.isRequired,
  life: PropTypes.string.isRequired,
  habitat: PropTypes.string.isRequired,
  diet: PropTypes.string.isRequired,
  geoRange: PropTypes.string.isRequired,
};

export default SinglAnimal;
