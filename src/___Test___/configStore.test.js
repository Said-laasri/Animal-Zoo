import store from '../redux/configStore';

it('should have an initial state', () => {
  expect(store.getState()).toEqual({ animal: [] });
});
