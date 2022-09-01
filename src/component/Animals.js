import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAnimal, categories } from '../redux/animals/animals';
import SinglAnimal from './SinglAnimal';
import './Animals.scss';

const Animals = () => {
  const dispatch = useDispatch();
  const animals = useSelector((state) => state.animal);
  useEffect(() => {
    dispatch(getAnimal());
  }, [dispatch]);
  const changeState = (e) => {
    dispatch(categories(e.target.value));
  };

  return (
    <div>
      <div className="categorie">
        <h3>Select:</h3>
        <select onChange={changeState}>
          <option value="type">Type</option>
          <option value="Mammal">Mammals</option>
          <option value="Bird">Birds</option>
          <option value="Reptile">Reptiles</option>
          <option value="Fishe">Fishes</option>
        </select>
      </div>
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
    </div>
  );
};

export default Animals;
