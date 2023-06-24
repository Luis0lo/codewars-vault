/*
Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.
*/

function findAverage(array) {
    return array.length > 0 ? array.reduce((acc, curr) => acc + curr ,0) / array.length : 0
  }

  function findAverage(array) {
    const arrLength = array.length
    let sum = 0
    
    if (arrLength === 0 ) return 0
    for (let i = 0 ; i < array.length ; i++){
      sum += array[i]
    }
    
    return sum/arrLength
  }

