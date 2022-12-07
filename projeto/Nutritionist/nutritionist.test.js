const Nutritionist = require('./Nutritionist');

describe('', () => {
  test('it should check if nutritionist instance is done correctly ', () => {
    const nutri = new Nutritionist();
    expect(nutri instanceof Nutritionist).toBe(true);
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
  });
});
