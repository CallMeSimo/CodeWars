// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

/* Solution */

var countBits = function (n) {
  //Convert to binary format
  let binaryValue = n.toString(2);
  let sum = 0;

  // loop through binaryValue indexes
  for (let i = 0; i < binaryValue.length; i++) {
    sum += parseInt(binaryValue[i]);
  }

  return sum;
};
