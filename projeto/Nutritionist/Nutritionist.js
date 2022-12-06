const Person = require('../Person/Person');

class Nutritionist extends Person {
  crn;
  specialty;
  schedule = [];

  constructor(name, email, cpf, telephone, crn, specialty) {
    super();
  }
}

module.exports = Nutritionist;
