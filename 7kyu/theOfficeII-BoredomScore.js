/*
Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'
*/

const boredomObj = {
  accounts: 1,
  finance: 2,
  canteen: 10,
  regulation: 3,
  trading: 6,
  change: 6,
  IS: 8,
  retail: 5,
  cleaning: 4,
  'pissing about': 25,
};

//Using for in
function boredom(staff) {
  let totalBoredom = 0;

  for (employee in staff) {
    totalBoredom += boredomObj[staff[employee]];
  }
  return totalBoredom <= 80
    ? 'kill me now'
    : totalBoredom < 100 && totalBoredom > 80
    ? 'i can handle this'
    : 'party time!!';
}

// Using reduce
function boredom(staff){
  
  const total = Object.keys(staff).reduce((prev, val)=> boredomObj[staff[val]] + prev,0)
  
  if(total <= 80) return 'kill me now'
  if(total >= 100) return 'party time!!'
  return 'i can handle this'
  
}
