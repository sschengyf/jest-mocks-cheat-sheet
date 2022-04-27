import { getBananaJuice } from './bar';
import { getBanana } from './fruits';

jest.mock('./fruits');

test('getBananaJuice', () => {
  jest.mocked(getBanana).mockReturnValue('Apple');
  expect(getBananaJuice()).toBe('Apple juice');
});
