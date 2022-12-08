const Nutritionist = require('./Nutritionist');

describe('Test of class Nutritionist', () => {
  test('it should check if nutritionist instance is done correctly ', () => {
    const nutri = new Nutritionist();
    expect(nutri instanceof Nutritionist).toBe(true);
  });

  test('it should verify that the registration is made with valid data', () => {
    const nutri = new Nutritionist(1, 'Ana', 'Clínica');
    expect(nutri.idNutritionist).toBe(1);
  });

  test('it should verify that the registration is made with invalid data', () => {
    const nutri = new Nutritionist('02', 'Ana', 'clinica');
    expect(() => {
      nutri.validateNutri();
    }).toThrow('Id is not filled with numerical value');
  });
});
