class Nutritionist extends Appointment {
  idNutritionist;
  name;
  specialty;

  constructor(idNutritionist, name, specialty) {
    this.idNutritionist = idNutritionist;
    this.name = name;
    this.specialty = specialty;
  }
}

module.exports = Nutritionist;
