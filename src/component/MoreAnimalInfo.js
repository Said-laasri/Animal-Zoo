import { useSelector } from 'react-redux';
import { useLocation, NavLink } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import './MoreAnimalInfo.scss';

const MoreAnimalInfo = () => {
  const animals = useSelector((state) => state.animal);
  const loacation = useLocation();
  const {
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
  } = loacation.state;
  const props = animals.find((item) => item.id === id);

  console.log(props);

  return (
    <div className="d-flex">
      <NavLink to="/">
        <AiOutlineArrowLeft className="home" />
      </NavLink>
      <article className="animalInfo">
        <h2>{name}</h2>
        <h3>{latinName}</h3>
        <img className="image-animalInfo" src={image} alt="animal" />
        <ul>
          <li className="d-flex">
            <h5>Type:</h5>
            {type}
          </li>
          <li>
            <h5>Active-Time:</h5>
            {' '}
&nbsp;
            {active}
          </li>
          <li>
            <h5>Weigth:</h5>
            {' '}
&nbsp;
            {minWeigth}
            {' '}
&nbsp; lbs &nbsp;- &nbsp;
            {maxWeigth}
            {' '}
&nbsp; lbs
          </li>
          <li>
            <h5>Length:</h5>
            {' '}
&nbsp;
            {minLength}
            {' '}
&nbsp; &nbsp;ft &nbsp;- &nbsp;
            {maxLength}
            {' '}
&nbsp; ft
          </li>
          <li>
            <h5>Lifespan:</h5>
            {' '}
&nbsp;
            {life}
            {' '}
&nbsp; years
          </li>
          <li>
            <h5>Habitat:</h5>
            {' '}
&nbsp;
            {habitat}
            {' '}
&nbsp;
          </li>
          <li>
            <h5>Diet:</h5>
            {' '}
&nbsp;
            {diet}
            {' '}
&nbsp;
          </li>
          <li>
            <h5>GeoLocation:</h5>
            {' '}
&nbsp;
            {geoRange}
            {' '}
&nbsp;
          </li>
        </ul>
      </article>
    </div>
  );
};

export default MoreAnimalInfo;
