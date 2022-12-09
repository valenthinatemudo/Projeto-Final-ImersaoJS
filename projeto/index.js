const Schedule = require('./Schedule/Schedule');
const Patient = require('./Patient/Patient');
const Nutritionist = require('./Nutritionist/Nutritionist');

//Registering Nutritionist
const nutri = new Nutritionist(1, 'Ana', 'Clinic');
const nutri2 = new Nutritionist(2, 'Mariane', 'Esportiva');

//Registering Patients
const patient1 = new Patient(4, 'Bianca', '81912349876', 62.5, 1.61);
const patient2 = new Patient(5, 'Beatriz', '81912349876', 60.5, 1.68);
const patient3 = new Patient(6, 'Valenthina', '81912349876', 68.5, 1.7);
const patient4 = new Patient(7, 'Nathalia', '81912349876', 59.5, 1.58);
const patient5 = new Patient(8, 'Sandra', '81912349876', 68, 1.6);
const patient6 = new Patient(9, 'Gabriela', '81912349876', 65, 1.56);
const patient7 = new Patient(10, 'Fernanda', '81912349876', 58, 1.51);

//Registering Schedules
const schedule = new Schedule(1, 'Ana', 'Clinic', '09/12/22');
const schedule2 = new Schedule(2, 'Mariane', 'Esportiva', '09/12/22');

//Verify schedule nutritionist and schedule appointment
schedule.verifyScheduleNutri(nutri, '09:00', patient1);
schedule.verifyScheduleNutri(nutri, '11:00', patient2);
schedule.verifyScheduleNutri(nutri, '15:00', patient3);
schedule.verifyScheduleNutri(nutri, '16:00', patient4);

schedule2.verifyScheduleNutri(nutri2, '10:00', patient5);
schedule2.verifyScheduleNutri(nutri2, '14:00', patient6);
schedule2.verifyScheduleNutri(nutri2, '16:00', patient7);

console.log(schedule);
console.log(schedule2);
