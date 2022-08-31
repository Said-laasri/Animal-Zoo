import animals from '../redux/animals/animals';

it('should return the initial state', () => {
  expect(animals(undefined, {})).toEqual([]);
});
