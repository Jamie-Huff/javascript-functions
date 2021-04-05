/* function takes the parameter, called in our console.log statement at the end
using the variable length, stating that:
j will exit the for loop once it reaches the same or more than the value of length.
if the value of length is 10, j will count up until it hits 10 etc...

the value line is undefined prior to the first loop.
On the first loop line will be undefined = undefined + '* ' which will now make
line = *
on the second loop line will be * = * + *
line = * *
this will continue until the value of j is that of length. 
this means what ever parameter we put in, when we call the function makeLine will be the number of stars we get.

*/
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line = line + "* "
  }
  return line + "\n";
}

/* For the function build triangle we will also take the parameter 'length' from when we call the function
what ever the value of length is, is the number of times the loop will run through.

the variable 'triangle' in this function is used to represent the same type of variable as 'line' in the above function
first loop triangle is  = undefined = undefined + the value of the line number.
and since the lineNumber is set to 1 at the start of the for statement, the number 1 will be ran through the make line function 
and give us the result of
undefined = undefined + makeLine(1) which means triangle = undefined + '* '
triangle = '* '
on the second loop through, the variable lineNumber will gain 1 in value from our lineNumber++ statement of our for loop.
that means

triangle<'* '> = '* ' + 
*/
function buildTriangle(length) {
  let triangle = '';
  let lineNumber = 1;
  for (lineNumber=1; lineNumber<=length; lineNumber++) {
    triangle = triangle + makeLine(lineNumber);
  
  }
  return triangle
}

console.log(buildTriangle(10));
