const Schedule = require('./Schedule');
const Patient = require('../Patient/Patient');
const Nutritionist = require('../Nutritionist/Nutritionist');

describe('Test of class Schedule', () => {
  test('should check if schedule instance is done correctly ', () => {
    const schedule = new Schedule();
    expect(schedule instanceof Schedule).toBe(true);
  });

  const nutri = new Nutritionist(1, 'Ana', 'Clinic');
  const patient1 = new Patient(4, 'Bianca', '81912349876', 62.5, 1.61);
  const schedule = new Schedule(1, 'Ana', 'Clinic', '09/12/22');

  test('should check the schedule of the nutritionist', () => {
    expect(schedule.verifyScheduleNutri(nutri, '09:00', patient1)).toBe(
      'Scheduled appointment'
    );
  });

  test('nutritionist has no more hours available', () => {
    const patient2 = new Patient(5, 'Beatriz', '81912349876', 60.5, 1.68);
    const patient3 = new Patient(6, 'Valenthina', '81912349876', 68.5, 1.7);
    const patient4 = new Patient(7, 'Nathalia', '81912349876', 59.5, 1.58);
    schedule.verifyScheduleNutri(nutri, '09:00', patient1);
    schedule.verifyScheduleNutri(nutri, '11:00', patient2);
    schedule.verifyScheduleNutri(nutri, '15:00', patient3);
    // schedule.verifyScheduleNutri(nutri, '16:00', patient4);
    expect(schedule.verifyScheduleNutri(nutri, '16:00', patient4)).toBe(
      `The nutritionist ${nutri.name} has no more hours today`
    );
  });
});
