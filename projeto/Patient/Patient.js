class Patient {
  idPatient;
  name;
  phone;
  weight;
  height;

  constructor(idPatient, name, phone, weight, height) {
    this.idPatient = idPatient;
    this.name = name;
    this.phone = phone;
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

  validateTelephone(phone) {
    let phoneRegex = /^(\d{2})\D*(\d{5}|\d{4})\D*(\d{4})$/;
    if (phoneRegex.test(phone)) {
      return (this.phone = phone);
    } else {
      throw new Error('Phone is not valid');
    }
  }
}

module.exports = Patient;
