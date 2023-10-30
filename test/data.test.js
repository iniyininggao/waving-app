import '/src/css/style.css';

import { feedbackContrastData, feedbackErrorData } from '/js/main.js'; 

describe('Contrast Feedback Test', () => {
  test('Contrast data should be a number', () => {
    expect(typeof feedbackContrastData).toBe('number');
  });

  test('Contrast data should be greater than or equal to 0', () => {
    expect(feedbackContrastData).toBeGreaterThanOrEqual(0);
  });
});

describe('Error Feedback Test', () => {
  test('Error data should be a number', () => {
    expect(typeof feedbackErrorData).toBe('number');
  });

  test('Error data should be greater than or equal to 0', () => {
    expect(feedbackErrorData).toBeGreaterThanOrEqual(0);
  });
});
