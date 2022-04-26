import { hiThere, morningEveryone } from './welcome';

// Override the whole greetings module by mocking it
jest.mock('./greetings', () => ({
  sayHi: () => 'Kia ora',
  sayMorning: () => 'Good day',
}));

test('hiThere', () => {
  expect(hiThere()).toBe('Kia ora');
});

test('morningEveryone', () => {
  expect(morningEveryone()).toBe('Good day');
});
