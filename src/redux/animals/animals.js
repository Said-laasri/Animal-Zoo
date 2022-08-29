import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAnimal } from '../redux/animals/animals';
import SinglAnimal from './SinglAnimal';

const Animals = () => {
  const dispatch = useDispatch();
  const animals = useSelector((state) => state.animal);
  useEffect(() => {
    dispatch(getAnimal());
  }, [dispatch]);

  return (
    <div>
      {animals.map((animal) => (
        <SinglAnimal
          key={animal.id}
          id={animal.id}
          name={animal.name}
          latinName={animal.latinName}
          image={animal.image}
        />
      ))}
    </div>
  );
};

export default Animals;
