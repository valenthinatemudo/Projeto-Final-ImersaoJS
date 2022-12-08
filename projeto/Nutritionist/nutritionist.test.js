const Nutritionist = require('./Nutritionist');

describe('Test of class Nutritionist', () => {
  test('it should check if nutritionist instance is done correctly ', () => {
    const nutri = new Nutritionist();
    expect(nutri instanceof Nutritionist).toBe(true);
  });

  test('it should verify that the registration is made with valid data', () => {
    const nutri = new Nutritionist('01', 'Valenthina', 'Clínica');
    expect(nutri.name).toBe('Valenthina');
  });
  test('it should verify that the registration is made with invalid data', () => {
    const nutri = new Nutritionist('01', 'Valenthina', 'Clínica');
    expect(nutri.idNutritionist).toBe('2');
  });
});
