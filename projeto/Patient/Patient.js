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
}

module.exports = Patient;
