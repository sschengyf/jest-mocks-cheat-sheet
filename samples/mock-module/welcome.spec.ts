import { hiThere } from './welcome';

test('hiThere', () => {
  expect(hiThere()).toBe('Hi, there!');
});
