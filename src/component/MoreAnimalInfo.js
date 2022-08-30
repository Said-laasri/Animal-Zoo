import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

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
    <div>
      <article className="d-flex">
        <h2>
          Name:
          {name}
        </h2>
        <h3>
          Latin:
          {latinName}
        </h3>
        <img className="image-animal" src={image} alt="animal" />
        <ul>
          <li>
            Type:
            {type}
          </li>
          <li>
            Active-Time:
            {active}
          </li>
          <li>
            Weigth:
            {minWeigth}
            lbs -
            {maxWeigth}
            lbs
          </li>
          <li>
            Length:
            {minLength}
            ft -
            {maxLength}
            ft
          </li>
          <li>
            Lifespan:
            {life}
            years
          </li>
          <li>
            Habitat:
            {habitat}
          </li>
          <li>
            Diet:
            {diet}
          </li>
          <li>
            GeoLocation:
            {geoRange}
          </li>
        </ul>
      </article>
    </div>
  );
};

export default MoreAnimalInfo;
