const Person = require('../Person/Person');

class Nutritionist extends Person {
  crn;
  specialty;
  schedule = [];

  constructor(name, email, cpf, telephone, crn, specialty, schedule) {
    super(name, email, cpf, telephone);
    this.crn = crn;
    this.specialty = specialty;
    this.schedule = schedule;
  }
}

module.exports = Nutritionist;
