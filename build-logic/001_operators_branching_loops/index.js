// EASY
// ADD FIVE NUMBERS
// Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.
const addFiveNumbers = ([ num1, num2, num3, num4, num5 ]) => num1 + num2 + num3 + num4 + num5;

const numbers = [5, 13, 7, 21, 48]


// alert(addFiveNumbers(numbers))



// NUMBER INPUT FROM USER IS ODD || EVEN
// Write a program to take a number input from user and determine whether the number is odd or even.
const userInput = document.getElementById("userInput")

// userInput.addEventListener('change', (event) => {
//     const userInputValue = event.target.value;

//     alert(`${userInputValue%2 === 0 ? `${userInputValue} is even` : `${userInputValue} is odd`}`)
// } )


// MAXIMUM AND MINIMUM OUT OF TWO GIVEN NUMBERS
// Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.
const maxOrMin = ([ num1, num2 ]) => {
    const maxOrMinNumber = num1>num2 ? `${num1} is maximum and ${num2} is minimum` : `${num2} is maximum and ${num1} is minimum`

    return maxOrMinNumber;
}

maxOrMinNumbers = [129, 251]


// alert(maxOrMin(maxOrMinNumbers))



// MAXIMUM OUT OF THREE GIVEN NUMBERS
// Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17

let threeNumbers = [3, 20, 500]
const maximumAmongNumbers = (numbers) => Math.max(...numbers)
console.log(maximumAmongNumbers(threeNumbers))

// Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.
const minimumAmongThreeNumbers = numbers => Math.min(...numbers)
threeNumbers = [35, 29, 46]
console.log(minimumAmongThreeNumbers(threeNumbers))

// Write program to take a month as an input from the user and find out whether the month has 31 days or not.
const month = document.getElementById("month")
const onChange = (e) => {
    if(e.target.value === 'JANUARY' || e.target.value === 'MARCH' || e.target.value === 'MAY' || e.target.value === 'JULY' || e.target.value === 'AUGUST' || e.target.value === 'OCTOBER' || e.target.value === 'DECEMBER' ) {
        console.log(`${e.target.value} has 31 days`)
    } else {
         console.log(`${e.target.value} does't have 31 days!`)
    }
}
month.addEventListener('change', onChange )

// Intermediate
// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

let arrayFizzBuzz = []

for (i=1; i<=100; i++) {
    let output = ''
    if(i%3 === 0 && i%5 ===0) {
        output = 'FizzBuzz'

    } else if(i%3 === 0 && i%5 !==0) {
        output = 'Fizz'

    } else if(i%3 !== 0 && i%5 ===0) {
        output = 'Buzz'

    } else {
        output = i
    }
    arrayFizzBuzz.push(output)
}
console.log(arrayFizzBuzz)


// Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

let n = 5;
for(i=0; i <= n; i++  ) {
    console.log('* '.repeat(i))
}

// Write a program to take a number input from user and print multiplication table 12 times for that number.
const onInput = (event) => {
    let userInput = event.target.value;
    let n = 12;
    for(let i=1; i<=n; i++){
        let newUserInput = userInput* i

        console.log(newUserInput)
    }
    console.log('\n')
    
}

userInput.addEventListener('input', onInput)

