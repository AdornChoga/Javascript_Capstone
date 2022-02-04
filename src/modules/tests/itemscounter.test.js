import countItems from '../items_counter.js';

describe('Items Counter Tests', () => {
  test('Is Items equal to 0', () => {
    const items = [];
    const testResult = countItems(items);
    expect(testResult).toBe(0);
  });
  test('Is Items equal to 2', () => {
    const items = [{}, {}];
    const testResult = countItems(items);
    expect(testResult).toBe(2);
  });
});