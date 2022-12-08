const Appointment = require('./Appointment');

describe('Test of class Appointment', () => {
  test('it should check if appointment instance is done correctly ', () => {
    const appointment = new Appointment();
    expect(appointment instanceof Appointment).toBe(true);
  });
});
