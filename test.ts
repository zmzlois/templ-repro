
const pattern1 = "(https?|ftp):\/\/[^\s/$.?#].[^\s]*"

const pattern2 = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i


const test1 = "https://loiszhao.com"
const test2 = "email@email.com"

const result1 = test1.match(pattern1)
const result2 = test2.match(pattern1)
const result3 = test1.match(pattern2)
const result4 = test2.match(pattern2)

// const result5 = pattern1.test(test1)
// const result6 = pattern1.test(test2)
const result7 = pattern2.test(test1)
const result8 = pattern2.test(test2)

console.log("Result 1:", result1)
console.log("result 2:", result2)
console.log("result 3:", result3)
console.log("result 4:", result4)

// console.log("result 5:", result5)
// console.log("result 6:", result6)
console.log("result 7:", result7)
console.log("Result 8:", result8)

