import { sayHi, sayMorning } from './greetings';

export function hiThere() {
  return sayHi('there');
}

export function morningEveryone() {
  return sayMorning('everyone');
}
