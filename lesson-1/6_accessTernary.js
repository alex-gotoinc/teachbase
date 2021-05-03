const { users } = require('./constants');

// w/o messages for a user
function checkAccess({ age, paid, blocked, badUsername, isAdmin }) {
  return isAdmin ? true :
    ((age >= 18 && age <= 35) ?
      (paid ? (!blocked ? (!badUsername ? true : false) : false) : false) : false);
}

console.log(checkAccess(users.admin));
console.log(checkAccess(users.validUser));
console.log(checkAccess(users.invalidUser));
