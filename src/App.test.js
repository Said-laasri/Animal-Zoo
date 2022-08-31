import Renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configStore';
import App from './App';

// test app
it('renders correctly', () => {
  const tree = Renderer.create(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
