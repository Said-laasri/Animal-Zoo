import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAnimal } from '../redux/animals/animals';
import SinglAnimal from './SinglAnimal';
import './Animals.scss';

const Animals = () => {
  const dispatch = useDispatch();
  const animals = useSelector((state) => state.animal);
  useEffect(() => {
    dispatch(getAnimal());
  }, [dispatch]);

  return (
    <div className="animalList">
      {animals.map((animal) => (
        <SinglAnimal
          key={animal.id}
          id={animal.id}
          name={animal.name}
          latinName={animal.latinName}
          image={animal.image}
          type={animal.type}
          active={animal.active}
          minWeigth={animal.minWeigth}
          maxWeigth={animal.maxLength}
          minLength={animal.minLength}
          maxLength={animal.minLength}
          life={animal.life}
          habitat={animal.habitat}
          diet={animal.diet}
          geoRange={animal.geoRange}
        />
      ))}
    </div>
  );
};

export default Animals;
