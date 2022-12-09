const Patient = require('./Patient');

describe('Test of class Patient', () => {
  test('it should check if patient instance is done correctly ', () => {
    const patient = new Patient();
    expect(patient instanceof Patient).toBe(true);
  });

  test('it should verify that the registration is made with valid data', () => {
    const patient = new Patient(2, 'Nathalia', '81996758955', 60.5, 1.61);
    expect(patient.idPatient).toBe(2);
  });

  test('it should verify that the registration is made with invalid data', () => {
    const patient = new Patient('2', 'Nathalia', '81996758955', 60.5, 1.61);
    expect(() => {
      patient.validatePatient();
    }).toThrow('Id is not filled with numerical value');
  });

  test('check if the phone is being filled in correctly', () => {
    const patient = new Patient();
    expect(() => {
      patient.validateTelephone('819967589');
    }).toThrow('Phone is not valid');
  });
});
