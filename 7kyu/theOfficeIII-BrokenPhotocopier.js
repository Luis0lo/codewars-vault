/*
The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

Given a string of binary, return the version the photocopier gives you as a string. 
*/

//Usin Map
function broken(x){
    return x.split('').map(a => a == "0" ? "1" : "0").join('');
  }
  

//Using for of
function broken(x){
    let result = ''
    for (const char of x){
      char === "1" ? result += "0" : result += "1" 
    }
    return result
  }