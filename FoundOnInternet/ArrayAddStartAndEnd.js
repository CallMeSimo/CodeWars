//  Add a value at the start and end of the array.

var myArray = ["a", "b", "c", "d"];

/* Solution 1 */
// myArray.push("end");
// myArray.unshift("start");

/* Solution 2. I like this format more feels and looks more clean*/
myArray = ["start", ...myArray, "end"];

console.log(myArray);
