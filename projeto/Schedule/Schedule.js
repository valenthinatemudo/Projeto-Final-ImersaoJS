const Nutritionist = require('../Nutritionist/Nutritionist');

class Schedule extends Nutritionist {
  date;
  appointmentDay = 0;
  hourPatient = [];

  #MAX_OF_APPOINTMENTS_DAY;

  constructor(idNutritionist, name, specialty, date) {
    super(idNutritionist, name, specialty);
    this.date = date;

    this.#MAX_OF_APPOINTMENTS_DAY = 3;
  }

  verifyScheduleNutri(nutri, hour, patient) {
    if (nutri instanceof Nutritionist) {
      if (this.appointmentDay < this.#MAX_OF_APPOINTMENTS_DAY) {
        this.appointmentDay++;
        this.hourPatient += [hour + ': ' + patient.name + ' / '];
        return 'Scheduled appointment';
      } else {
        console.log(`The nutritionist ${this.name} has no more hours today`);
        return `The nutritionist ${this.name} has no more hours today`;
      }
    }
  }
}

module.exports = Schedule;
