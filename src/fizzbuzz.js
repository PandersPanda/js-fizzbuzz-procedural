const answer = []

// Write your code below this line

for (i = 1; i <= 15; i++) {
    let dividable3 = false
    let dividable5 = false
    if (i % 3 === 0) {
      dividable3 = true
    }
    if (i % 5 === 0) {
      dividable5 = true
    }
    if (dividable3 && dividable5) {
      answer.push('FizzBuzz')
      continue
    }
    if (dividable3) {
      answer.push('Fizz')
      continue
    }
    if (dividable5) {
      answer.push('Buzz')
      continue
    }
    answer.push(i)
  }



// Don't touch the code below this line, we'll cover it later
module.exports = answer
