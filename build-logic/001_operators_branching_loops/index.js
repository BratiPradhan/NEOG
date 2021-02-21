// ADD FIVE NUMBERS
const addFiveNumbers = ({ num1, num2, num3, num4, num5 }) => num1 + num2 + num3 + num4 + num5;

const numbers = {
    num1: 5,
    num2: 13,
    num3: 7,
    num4: 21,
    num5: 48,
}

// alert(addFiveNumbers(numbers))



// NUMBER INPUT FROM USER IS ODD || EVEN
const userInput = document.getElementById("userInput")

userInput.addEventListener('change', (event) => {
    const userInputValue = event.target.value;

    alert(`${userInputValue%2 === 0 ? `${userInputValue} is even` : `${userInputValue} is odd`}`)
} )


// MAXIMUM AND MINIMUM OUT OF TWO GIVEN NUMBERS
const maxOrMin = ({ num1, num2 }) => {
    const maxOrMinNumber = num1>num2 ? `${num1} is maximum and ${num2} is minimum` : `${num2} is maximum and ${num1} is minimum`

    return maxOrMinNumber;
}

maxOrMinNumbers = {
    num1: 129,
    num2: 251,
}

// alert(maxOrMin(maxOrMinNumbers))



