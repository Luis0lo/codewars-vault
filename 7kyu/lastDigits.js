/*
Your job is to implement a function which returns the last D digits of an integer N as a list.

Special cases:
If D > (the number of digits of N), return all the digits.
If D <= 0, return an empty list.
Examples:
N = 1
D = 1
result = [1]

N = 1234
D = 2
result = [3, 4]

N = 637547
D = 6
result = [6, 3, 7, 5, 4, 7]
*/

function lastDigit(n, d) {
  return (n + '').split('').splice(-d, d).map(Number);
}

function lastDigit(n, d) {
  const stringN = String(n); //convert the number into a string

  if (d <= 0) return []; //check if d is greater than zero, if not return an empty list

  if (d > stringN.length) return stringN.split('').map((x) => Number(x)); //if d is grater than n numbers return n

  const result = stringN.slice(-d).split(''); //else return the last d numbers of n

  return result.map((x) => {
    return Number(x);
  });
}
