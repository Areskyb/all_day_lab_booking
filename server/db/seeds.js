use bookings;
db.dropDatabase();

db.guests.insertMany([
  {
    name:"Juan",
    email:"juan@codeclan.com",
    checkedStatus:"checked in"
  },
  {
    name:"Eugene",
    email:"eugene@codeclan.com",
    checkedStatus:"not checked in"
  },
  {
    name:"Sandy",
    email:"sandy@codeclan.com",
    checkedStatus:"checked in"
  },
  {
    name:"Colin",
    email:"colin@codeclan.com",
    checkedStatus:"not checked in"
  }
]);