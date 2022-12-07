const Person = require('./Person');

describe('Test of class Person', () => {
  test('it should check if person instance is done correctly ', () => {
    const person = new Person();
    expect(person instanceof Person).toBe(true);
  });

  test('it should verify that the registration is made with valid data', () => {
    const person = new Person(
      'Valenthina',
      'teste@reprograma.com.br',
      '37761514046',
      '81996758955'
    );
    expect(person.cpf).toBe('37761514046');
  });
});
