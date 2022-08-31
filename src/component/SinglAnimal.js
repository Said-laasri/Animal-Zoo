import { PropTypes } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDoubleRight } from 'react-icons/bs';
import './SinglAnimal.scss';

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
    <div className="animal d-flex">
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
        <button className="button" type="button" id={id}>
          <BsChevronDoubleRight />
        </button>
      </Link>
      <div className="d-flex-row">
        <img className="image-animal" src={image} alt="animal-name" />
        <div className="d-flex">
          <h2 className="name-animal">
            Name: &nbsp;
            {name}
          </h2>
          <h3 className="name-latin">
            Latin: &nbsp;
            {latinName}
          </h3>
        </div>
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
