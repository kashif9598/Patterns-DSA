// Geek is very fond of patterns. Once, his teacher gave him a  pattern to solve. He gave Ram an integer n and asked him to build a pattern.

// Help Ram build a pattern.
// Example 1:
// Input: 5
// Output:
//     *        [4,1,4]    num = 5
//    ***       [3,3,3]
//   *****      [2,5,2]
//  *******     [1,7,1]
// *********    [0,9,0]
// Your Task:
// You don't need to input anything. Complete the function printTriangle() which takes  an integer n  as the input parameter and print the pattern.
// Constraints:
// 1<= N <= 20

const printTriangle = (num) => {
    let pattern = ''
    for (let i = 1; i <= num; i++) {
        //space
        for (let j = 1; j <= num - i; j++) {
            pattern += ' ';
        }
        //star
        for (let j = 1; j <= 2 * i - 1; j++) {
            pattern += '*'
        }
        //space
        for (let j = 1; j <= num - i; j++) {
            pattern += ' ';
        }
        pattern += '\n'
    }
    return pattern;
}

console.log(printTriangle(5))