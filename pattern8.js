// Geek is very fond of patterns. Once, his teacher gave him a  pattern to solve. He gave Geek an integer n and asked him to build a pattern.
// Help Geek to build a pattern.
// Example 1:

// Input: 5
// Output:
// *********  [0,9,0]    num = 5    i = 5
//  *******   [1,7,1]               space = num - i
//   *****    [2,5,2]               star  = (2 * num) - 2*i-i
//    ***     [3,3,3]
//     *      [4,1,4]

// Your Task:
// You don't need to input anything. Complete the function printTriangle() which takes  an integer n  as the input parameter and print the pattern.
// Constraints:
// 1<= N <= 20

const printTriangle = (num) => {
    let pattern = ''
    for (let i = 1; i <= num; i++) {
        //space
        for (let j = 1; j < i; j++) {
            pattern += ' '
        }
        //star
        for (let j = 1; j <= 2 * num - (2 * i - 1); j++) {
            pattern += '*'
        }
        //space
        for (let j = 1; j < i; j++) {
            pattern += ' '
        }
        pattern += '\n'
    }
    return pattern
}

console.log(printTriangle(5))