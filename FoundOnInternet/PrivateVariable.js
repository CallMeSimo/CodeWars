//  How do you create a private variable?

function sercretVariable() {
  var private = "Super secret code!";
  return function () {
    return private;
  };
}

var getPrivateVariable = sercretVariable();

console.log(getPrivateVariable());
