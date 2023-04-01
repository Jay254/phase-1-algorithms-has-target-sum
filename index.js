function hasTargetSum(array, target) {
  // Write your algorithm here

  for (let i = 0; i < array.length; i++){

    for(let j = i + 1; j < array.length; j++){

      let sum = array[i] + array[j];

      if(sum === target){
          return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  runtime: O(n^2)
  spacetime: O(n)
*/

/* 
  Add your pseudocode here

    loop through array
      loop through the rest of the elements
          declare sum, which sums first array element and nested array element
          if sum equals target 
              return true;
    return false;
       
*/

/*
  Add written explanation of your solution here
  I looped through the array input 
  I created a nested array inside the first to loop through the elements that follows the one acted upon by the first loop
  I declared a sum variable that adds together the element in the first loop and  that of the second loop
  If it equals the target input, the program should return true
  The hasTargetsum() function returns false if after finishing the whole it ascertains that no two numbers in the input array equals target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 8, 12, 4, 9, 7], 10));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([-1, 0, 5, 10], 3));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;