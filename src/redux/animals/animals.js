import { createAsyncThunk } from '@reduxjs/toolkit';
import API_URL from '../../api/api';

const ADD_ANIMAL = 'zoo/animals/ADD_ANIMAL';

const initialState = [];

export default function animals(state = initialState, action) {
  switch (action.type) {
    case `${ADD_ANIMAL}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
}

export const addAnimal = (payload) => ({
  type: ADD_ANIMAL,
  payload,
});

const duplicateData = (data) => {
  const changed = [];

  data.forEach((obj) => {
    const newObj = {
      id: obj.id,
      name: obj.name,
      latinName: obj.latin_name,
      image: obj.image_link,
      type: obj.animal_type,
      active: obj.active_time,
      minWeigth: obj.weight_min,
      maxWeigth: obj.weight_max,
      minLength: obj.length_min,
      maxLength: obj.length_max,
      life: obj.lifespan,
      habitat: obj.habitat,
      diet: obj.diet,
      geoRange: obj.geo_range,
    };
    changed.push(newObj);
  });
  return changed;
};

const getAnimal = createAsyncThunk(ADD_ANIMAL, async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  const altered = duplicateData(data);
  return altered;
});

export { getAnimal };
