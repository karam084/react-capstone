import { getSearchedCountries } from '../Redux/Countries';

it('getSearchedCountries should return a promise', () => {
  expect(getSearchedCountries()).toEqual(expect.any(Function));
});
