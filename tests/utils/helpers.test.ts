import { describe, expect, it } from '@jest/globals';

// Example utility function test
describe('formatDate', () => {
  it('formats a date correctly', () => {
    // This is just a placeholder example
    // Replace with an actual utility function from your lib directory
    const formatDate = (date: Date, locale = 'en-US'): string => {
      return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(date);
    };

    const date = new Date(2023, 0, 15); // January 15, 2023
    expect(formatDate(date)).toBe('January 15, 2023');
    expect(formatDate(date, 'es-ES')).toMatch(/15 de enero de 2023/);
  });
});
