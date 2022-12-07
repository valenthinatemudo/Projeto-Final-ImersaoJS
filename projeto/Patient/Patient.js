const Person = require('../Person/Person');

class Patient extends Person {
  weight;
  height;

  constructor(name, email, cpf, telephone, weight, height) {
    super(name, email, cpf, telephone);
    this.weight = weight;
    this.height = height;
  }
}

module.exports = Patient;
