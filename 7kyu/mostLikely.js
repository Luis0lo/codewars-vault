/*
Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

So:

Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.
*/

function mostLikely(prob1, prob2) {
  const [n1, n2] = prob1.split(':');
  const [j1, j2] = prob2.split(':');

  const probResult1 = n1 / n2;
  const probResult2 = j1 / j2;

  return probResult1 > probResult2;
}

function mostLikely(prob1, prob2) {
  return (
    prob1.split(':').reduce((a, b) => a / b) >
    prob2.split(':').reduce((a, b) => a / b)
  );
}
