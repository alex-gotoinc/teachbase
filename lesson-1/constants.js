module.exports = {
  users: {
    initial: {
      age: null,
      paid: null,
      blocked: null,
      badUsername: null,
      isAdmin: null
    },
    admin: {
      age: 19,
      paid: true,
      blocked: false,
      badUsername: false,
      isAdmin: true
    },
    validUser: {
      age: 18,
      paid: true,
      blocked: false,
      badUsername: false,
      isAdmin: false
    },
    invalidUser: {
      age: 1,
      paid: false,
      blocked: true,
      badUsername: true,
      isAdmin: false
    }
  },
  randomStrings: [
    'ice',
    'california',
    'Pseudopseudohypoparathyroidism',
    'Pneumonoultramicroscopicsilicovolcanoconiosis',
  ]
}