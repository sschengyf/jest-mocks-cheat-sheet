import { hiThere, morningEveryone } from './welcome';

// Normal test without mocking

test('hiThere', () => {
  expect(hiThere()).toBe('Hi, there!');
});

test('morningEveryone', () => {
  expect(morningEveryone()).toBe('Morning, everyone!');
});
