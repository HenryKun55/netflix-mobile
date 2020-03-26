import { getStorage, setStorage, removeStorage } from './storage';

function calculateAge(birthday: Date) { // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export {
  getStorage,
  setStorage,
  removeStorage,
  calculateAge
};
