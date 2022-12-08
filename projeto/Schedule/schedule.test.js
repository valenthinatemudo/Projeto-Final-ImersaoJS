const Schedule = require('./Schedule');

describe('Test of class Schedule', () => {
  test('it should check if schedule instance is done correctly ', () => {
    const schedule = new Schedule();
    expect(schedule instanceof Schedule).toBe(true);
  });
});
