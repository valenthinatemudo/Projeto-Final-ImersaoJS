const Patient = require('../Patient/Patient');

class Schedule {
  hour;
  date;

  constructor(hour, date, patient) {
    if (patient instanceof Patient) {
      this.hour = hour;
      this.date = date;
      this.patient = patient;
    }
  }
}

module.exports = Schedule;
