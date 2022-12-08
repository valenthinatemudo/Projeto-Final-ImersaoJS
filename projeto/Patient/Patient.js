class Patient {
  idPatient;
  name;
  telephone;
  weight;
  height;

  constructor(idPatient, name, telephone, weight, height) {
    this.idPatient = idPatient;
    this.name = name;
    this.telephone = telephone;
    this.weight = weight;
    this.height = height;
  }

  validatePatient() {
    if (
      typeof this.idPatient === 'string' ||
      typeof this.idPatient === 'boolean'
    ) {
      throw new Error('Id is not filled with numerical value');
    } else {
      return this.idPatient;
    }
  }
}

module.exports = Patient;
