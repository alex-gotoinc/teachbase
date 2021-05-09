Date.__proto__.convertDate = date => {
  // Converts the date in d to a date-object. The input can be:
  //   a date object: returned without modification
  //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
  //   a number     : Interpreted as number of milliseconds
  //                  since 1 Jan 1970 (a timestamp) 
  //   a string     : Any format supported by the javascript engine, like
  //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
  //  an object     : Interpreted as an object with year, month and date
  //    
  return (
    date.constructor === Date ? date :
      date.constructor === Array ? new Date(date[0], date[1], date[2]) :
        date.constructor === Number ? new Date(date) :
          date.constructor === String ? new Date(date) :
            typeof date === "object" ? new Date(date.year, date.month, date.date) :
              NaN
  );
}
Date.__proto__.compareDates = (date1, date2) => {
  // Compare two dates (could be of any type supported by the convert
  // function above) and returns:
  //  -1 : if a < b
  //   0 : if a = b
  //   1 : if a > b
  // NaN : if a or b is an illegal date
  return (
    isFinite(date1 = Date.convertDate(date1).valueOf()) &&
      isFinite(date2 = Date.convertDate(date2).valueOf()) ?
      (date1 > date2) - (date1 < date2) :
      NaN
  );
}

const human = Object.create({}, {
  fullName: {
    set: function (fullName) {
      [this.firstName, this.lastName] = fullName.split(' ');
    },
    get: function () {
      return `${this.firstName} ${this.lastName}`;
    }
  },
  dateOfBirth: {
    set: function (date) {

      if (Date.compareDates(date, new Date()) === 0) {
        console.log('Dates are equal. No need to compare(age is < 1)');
      }

      if (Date.compareDates(date, new Date()) === -1) {
        this._dateOfBirth = date;
        this.age = (new Date).getFullYear() - this._dateOfBirth.getFullYear();
      }

    },
    get: function () {
      return this._dateOfBirth.toLocaleDateString();
    }
  }
});

human.fullName = 'Kek Cheburek';
human.dateOfBirth = new Date(3600 * 24 * 1000); // 02.01.1970 GMT+0
console.log(human);
console.log('human.dateOfBirth ->', human.dateOfBirth);