// Given a number of points on a plane, your task is to find two points with the smallest distance between them.

// Each points will be represented as an array with 2 coordinates.

// Example
//   1  2  3  4  5  6  7  8  9
// 1  
// 2    . A
// 3                . D
// 4                   . F       
// 5             . C
// 6              
// 7                . E
// 8    . B
// 9                   . G
// For the plane above, the input will be:

// [
//   [2,2], // A
//   [2,8], // B
//   [5,5], // C
//   [6,3], // D
//   [6,7], // E
//   [7,4], // F
//   [7,8]  // G
// ]



function closestPair(pts) {
    var a, b, pair, cmp, closest = Infinity;
    for (a = 0; a < pts.length; a++) {
      for (b = a + 1; b < pts.length; b++) {
        cmp = Math.abs(pts[a][0] - pts[b][0]) + Math.abs(pts[a][1] - pts[b][1]);
        if (closest > cmp) { closest = cmp; pair = [pts[a], pts[b]] }
      }
    }
    return pair;
  }