// import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import React from 'react';
import { BsChevronDoubleRight } from 'react-icons/bs';

const SinglAnimal = (props) => {
  const { id, name, image, latinName } = props;

  return (
    <div>
      <img src={image} alt="animal-name" />
      <div>
        <button type="button" id={id}>
          <BsChevronDoubleRight />
        </button>
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
};

export default SinglAnimal;
