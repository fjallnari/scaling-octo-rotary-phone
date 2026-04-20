import { expect, test } from 'bun:test';
import { add } from './index';

test('add returns the sum of two numbers', () => {
  expect(add(1, 2)).toBe(3);
});

test('add returns a negative number when the sum is negative', () => {
  expect(add(-1, -2)).toBe(-3);
});
