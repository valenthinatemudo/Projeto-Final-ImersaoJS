const Person = require('./Person');

describe('Test of class Person', () => {
  test('it should check if person instance is done correctly ', () => {
    const person = new Person();
    expect(person instanceof Person).toBe(true);
  });

  test('it should verify that the registration is made with valid data', () => {
    const person = new Person();
    expect(
      person.registerPerson(
        'Valenthina',
        'temudo.valenthina@gmail.com',
        '123.456.789-00'
      )
    ).toBe('Successfully registered person');
  });
  test('it should verify that the registration is made with invalid data', () => {
    const person = new Person();
    expect(() =>
      person.registerPerson(
        'Valenthina',
        'temudo.valenthina@gmail',
        '123.456.789'
      )
    ).toThrow('Registration error, invalid data');
  });
});
