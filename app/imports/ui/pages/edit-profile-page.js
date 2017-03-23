import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';

export const instrumentList = ['Bass', 'Drums', 'Guitar', 'Piano', 'Vocals'];
export const tasteList = ['Classical', 'Blues', 'Jazz', 'Rock', 'Pop'];
export const levelList = ['Beginner', 'Intermediate', 'Expert'];
export const goalList = ['Informal Jam Sessions', 'Improve Skills', 'Perform'];
export const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const timeObjects = [{ label: 'Midnight', value: '0' },
  { label: '1:00 a.m.', value: '1' },
  { label: '2:00 a.m.', value: '2' },
  { label: '3:00 a.m.', value: '3' },
  { label: '4:00 a.m.', value: '4' },
  { label: '5:00 a.m.', value: '5' },
  { label: '6:00 a.m.', value: '6' },
  { label: '7:00 a.m.', value: '7' },
  { label: '8:00 a.m.', value: '8' },
  { label: '9:00 a.m.', value: '9' },
  { label: '10:00 a.m.', value: '10' },
  { label: '11:00 a.m.', value: '11' },
  { label: 'Noon', value: '12' },
  { label: '1:00 p.m.', value: '13' },
  { label: '2:00 p.m.', value: '14' },
  { label: '3:00 p.m.', value: '15' },
  { label: '4:00 p.m.', value: '16' },
  { label: '5:00 p.m.', value: '17' },
  { label: '6:00 p.m.', value: '18' },
  { label: '7:00 p.m.', value: '19' },
  { label: '8:00 p.m.', value: '20' },
  { label: '9:00 p.m.', value: '21' },
  { label: '10:00 p.m.', value: '22' },
  { label: '11:00 p.m.', value: '23' },
  ];

Template.Edit_Profile_Page.helpers({
  instruments() {
    return _.map(instrumentList, function makeInstrumentObject(instrument) { return { label: instrument }; });
  },
  tastes() {
    return _.map(tasteList, function makeTasteObject(taste) { return { label: taste }; });
  },
  levels() {
    return _.map(levelList, function makeLevelObject(level) { return { label: level }; });
  },
  goals() {
    return _.map(goalList, function makeGoalObject(goal) {
      return { label: goal };
    });
  },
  days() {
    return _.map(dayList, function makeGoalObject(day) {
      return { label: day };
    });
  },
  times() {
    return timeObjects;
  },
});
