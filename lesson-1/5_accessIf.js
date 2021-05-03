const { users } = require('./constants');

// with message for a user
function checkAccess({ age, paid, blocked, badUsername, isAdmin }) {

  // creating initial state
  let result = { ...users.initial };

  // check if user is the admin
  if (isAdmin) {
    console.log('Access granted! [ADMIN]');
    result.isAdmin = true;
    return true;
  } else {
    result.isAdmin = false;
  }

  // check for booleans values in prop object
  const checkBoolean = (prop, name, msg, falsyModifier) => {
    if (falsyModifier === 'falsy' ? !prop : prop) { result[name] = true }
    else { result[name] = msg }
  }

  const checkResult = () => {
    let isAccessed = true;

    for (const [key, value] of Object.entries(result)) {

      if (typeof value === 'string') {
        console.log('ERROR ->', value);
        isAccessed = false;
      }

      if (key === 'isAdmin' && value === false && isAccessed) {
        console.log('Access granted! [USER]');
        return true;
      }
    }
  }

  // check age
  if (age >= 18 && age <= 35) {
    result.age = true
  } else {
    result.age = 'Age is not valid!'
  }

  checkBoolean(paid, 'paid', 'Not payed!');
  checkBoolean(blocked, 'blocked', 'User is blocked!', 'falsy');
  checkBoolean(badUsername, 'badUsername', 'Username contains forbidden words!', 'falsy');

  return checkResult();
}

checkAccess(users.admin);
checkAccess(users.validUser);
checkAccess(users.invalidUser);


