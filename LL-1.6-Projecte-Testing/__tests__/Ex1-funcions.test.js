var modulOperacions = require('../app/Ex1-funcions');

test('adds 10 + 20 to equal 30', () => {
  expect(modulOperacions.sum(10, 20)).toBe(30);
});

test('substract 100 - 20 to equal 80', () => {
  expect(modulOperacions.rest(100, 20)).toBe(80);
});

test('substract 10 - 20 to equal -10', () => {
  expect(modulOperacions.rest(10, 20)).toBe(-10);
});

test('substract 10 - 10 to equal 0', () => {
  expect(modulOperacions.rest(10, 10)).toBe(0);
});

test('multiplies 10 * 20 to equal 200', () => {
  expect(modulOperacions.multi(10, 20)).toBe(200);
});

test('multiplies 10 * -20 to equal -200', () => {
  expect(modulOperacions.multi(10, -20)).toBe(-200);
});

test('divides 100 / 20 to equal 5', () => {
  expect(modulOperacions.div(100, 20)).toBe(5);
});

test('divides 10 / 20 to equal 0.5', () => {
  expect(modulOperacions.div(10, 20)).toBe(0.5);
});

test('divides 10 / 0 to equal infinit', () => {
  expect(modulOperacions.div(10, 0)).toBe(Infinity);
});

