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
  console.log(animals);
  const changeState = (e) => {
    console.log(e.target.value);
    dispatch(categories(e.target.value));
  };

  return (
    <div>
      <select onChange={changeState}>
        <option value="type">Animal Type</option>
        <option value="Mammal">Mammals</option>
        <option value="Bird">Birds</option>
        <option value="Reptile">Reptiles</option>
        <option value="Amphibian">Amphibians</option>
        <option value="Fishe">Fishes</option>
        <option value="Invertebrate">Invertebrates</option>
        <option value="Fungi">Fungi</option>
      </select>
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
