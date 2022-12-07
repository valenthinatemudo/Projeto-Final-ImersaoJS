class Person {
  name;
  email;
  #cpf;
  telephone;

  constructor(name, email, cpf, telephone) {
    let cpfRegex =
      /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
    let emailRegex = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i;
    let telephoneRegex = /^\+?\(?([0-9]{2})?\)?\s?[0-9]{4,5}(-|\s)?[0-9]{4}$/;
    if (
      cpfRegex.test(cpf) &&
      emailRegex.test(email) &&
      telephoneRegex.test(telephone)
    ) {
      this.name = name;
      this.email = email;
      this.#cpf = cpf;
      this.telephone = telephone;
    }
  }

  get cpf() {
    return this.#cpf;
  }

  set cpf(cpf) {
    this.#cpf = cpf;
  }
}

module.exports = Person;
