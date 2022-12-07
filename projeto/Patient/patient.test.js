const Nutritionist = require('../Nutritionist/Nutritionist');
const Patient = require('./Patient');

describe('', () => {
  test('it should check if patient instance is done correctly ', () => {
    const patient = new Patient();
    expect(patient instanceof Patient).toBe(true);
  });

  test('it should verify that the registration is made with valid data', () => {
    const nutri = new Nutritionist(
      'Valenthina',
      'teste@reprograma.com.br',
      '37761514046',
      '81996758955',
      '123',
      'Clínica',
      '[09:00, 11:00]'
    );
    expect(nutri).toBe();
  });
});
