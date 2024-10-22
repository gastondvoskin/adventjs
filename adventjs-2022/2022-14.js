// WIP 

// function getOptimalPath(path) {
//   return 0
// }


function getOptimalPath(path) {
  let sums = Array(path.length).fill(0); 
  // console.log(sums); 

  for (let i = path.length - 1; i >= 0; i--) {
    const row = path[i];
    // console.log(i, row);
    for (let j = 0; j < row.length - 1; j++) {
      const number_A = row[j];
      const number_B = row[j + 1];
      const max = Math.max(number_A, number_B); 
      console.log({j}, {number_A}, {number_B}, {max}, ); 
      console.log({j}, "sums[j]:", sums[j], sums)
      sums[j] = sums[j] + max; 
      console.log({j}, {sums}); 
    } 
    sums.splice(-1); 
    console.log(sums); 
  }
  // sums parse to a number and add the first element of the pyramid
}

// TESTING
// getOptimalPath([
//   [0], 
//   [1, 2]
// ]);
getOptimalPath([
  [0], 
  [1, 2], 
  [3, 4, 5]
]);
/* 
0 
1 2
3 4 5

0 
1 2 
4 5

0 
5 7 

0 
7

7



*/
// getOptimalPath([[1], [2, 3], [4, 5, 6]]);

/* 
LOGIC

0 
1 2
3 4 5
6 7 8 9

      0
    1   2
  3   4   5
6   7   8   9


starting from top, each node has access to the column with the same index and to the column with one more index. 
starting from bottom, reduce the array (max 10 numbers) in one element getting only the max of each pair. 
then, add these numbers to each element in the next row.
eg: 
0. 
      0
    1   2
  3   4   5
6   7   8   9

1. 
      0
    1   2
  3   4   5
  7   8   9     get the max of each pair

2. 
      0
    1    2
 7+3  12   14   sum the max to next row


3. 
      0
    1   2
    12  14      get the max of each pair

4. 
      0
    13   16     sum the max to next row

5. 
      0
      16        get the max of each pair

5. 
      16        sum the max to next row

*/