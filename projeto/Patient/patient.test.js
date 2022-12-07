const Patient = require('./Patient');

describe('Test of class Patient', () => {
  test('it should check if patient instance is done correctly ', () => {
    const patient = new Patient();
    expect(patient instanceof Patient).toBe(true);
  });

  test('it should verify that the registration is made with valid data', () => {
    const patient = new Patient(
      'Valenthina',
      'teste@reprograma.com.br',
      '37761514046',
      '81996758955',
      '62.5',
      '1.61'
    );
    expect(patient.height).toBe('1.61');
  });
});
