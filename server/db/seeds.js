use bookings;
db.dropDatabase();

db.bookings.insertMany([
  {
    name:"Juan",
    email:"juan@codeclan.com",
    checkedStatus:"true"
  },
  {
    name:"Eugene",
    email:"eugene@codeclan.com",
    checkedStatus:"false"
  },
  {
    name:"Sandy",
    email:"sandy@codeclan.com",
    checkedStatus:"true"
  },
  {
    name:"Colin",
    email:"colin@codeclan.com",
    checkedStatus:"false"
  }
]);