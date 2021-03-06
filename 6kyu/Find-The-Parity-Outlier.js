// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

/* Solution */

function findOutlier(integers) {
  //Holders
  let even = [];
  let odd = [];

  //processing
  for (let i = 0; i < integers.length; i++) {
    Number.isInteger(integers[i] / 2)
      ? even.push(integers[i])
      : odd.push(integers[i]);
  }

  //returning smallest index size
  return even.length < odd.length ? even[0] : odd[0];
}
