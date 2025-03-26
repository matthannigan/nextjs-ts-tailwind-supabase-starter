describe('Console Log Test', () => {
  beforeAll(() => {
    console.log('This is a log from beforeAll hook');
  });

  beforeEach(() => {
    console.log('This is a log from beforeEach hook');
  });

  it('should log to console during test', () => {
    console.log('This is a standard log message');
    console.info('This is an info message');
    console.warn('This is a warning message');
    console.error('This is an error message');

    expect(true).toBe(true);
  });

  it('should log object data', () => {
    console.log('User object:', { id: 1, name: 'Test User', email: 'test@example.com' });

    const complexObject = {
      settings: {
        theme: 'dark',
        notifications: true,
        preferences: ['email', 'push'],
      },
      stats: {
        visits: 42,
        clicks: 108,
      },
    };

    console.log('Complex object data:', complexObject);

    expect(true).toBe(true);
  });

  afterEach(() => {
    console.log('This is a log from afterEach hook');
  });

  afterAll(() => {
    console.log('This is a log from afterAll hook');
  });
});
