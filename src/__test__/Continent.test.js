import TestRenderer from 'react-test-renderer'; // ES6
import { Provider } from 'react-redux';
import Continent from '../Component/Continents.jsx';
import store from '../Redux/ConfigureStore.jsx';

it('Continents render correctly', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <Continent />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
