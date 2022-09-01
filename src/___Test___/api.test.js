// test api
import Renderer from 'react-test-renderer';
import API_URL from '../api/api';

it('renders correctly', () => {
  const tree = Renderer.create(<API_URL />).toJSON();
  expect(tree).toMatchSnapshot();
});
