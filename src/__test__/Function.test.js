import { getCountriesApi } from '../Redux/Countries.jsx';

it('getCountriesApi should return a promise', () => {
  expect(getCountriesApi()).toEqual(expect.any(Function));
});
