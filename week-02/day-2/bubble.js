//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

var points = [43, 12, 24, 9, 5];
function bubble() {
  points.sort(function(a, b){return a-b});
  return points;
}
console.log(bubble(points));



var cxc = [[5, 9, 12, 24, 43], true];
// console.log(cxc[0]);
// console.log(cxc[1]);
function advancedBubble() {
  if (cxc[1] === true) {
    cxc[0].sort(function(a, b){return b-a});
    return cxc[0];
  }
}
console.log(advancedBubble(cxc));


// //  Example:
// console.log(bubble([43, 12, 24, 9, 5]))
// //  should print [5, 9, 12, 24, 34]
// console.log(advancedBubble([43, 12, 24, 9, 5], true))
// //  should print [34, 24, 9, 5]
