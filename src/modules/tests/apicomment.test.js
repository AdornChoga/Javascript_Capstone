import { countComments } from '../apicomment';

describe('Testing for counts', () => {
  test('Adding a new comment', () => {
    const newArray = [];
    const testResult = countComments(newArray);
    expect(testResult).toBe(0);
  });

  test('Adding elements to array', () => {
    const addArray = [{
      username: 'Choga',
      comment: 'This is nice to watch',
    },
    {
      username: 'Parker',
      comment: 'I would be at the cinema',
    },
    ];
    const arrayOutcome = countComments(addArray);
    expect(arrayOutcome).toBe(2);
  });
});