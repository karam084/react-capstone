import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Countries from '../Component/Countries.jsx';
import store from '../Redux/ConfigureStore.jsx';

it('Countries renders correctly', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <Countries />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
