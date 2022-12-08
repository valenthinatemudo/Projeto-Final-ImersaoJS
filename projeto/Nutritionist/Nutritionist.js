class Nutritionist {
  idNutritionist;
  name;
  specialty;

  constructor(idNutritionist, name, specialty) {
    this.idNutritionist = idNutritionist;
    this.name = name;
    this.specialty = specialty;
  }

  validateNutri() {
    if (
      typeof this.idNutritionist === 'string' ||
      typeof this.idNutritionist === 'boolean'
    ) {
      throw new Error('Id is not filled with numerical value');
    } else {
      return this.idNutritionist;
    }
  }
}

module.exports = Nutritionist;

const nutri = new Nutritionist(1, 'Ana', 'Clínica');
nutri.validateNutri();
console.log(nutri);
