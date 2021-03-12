 // JS EXERCISES(TEAM SCOPE)
 // FUNCTIONAL PROGRAMMING EXERCISES

 // Take an object with your mother's name and your age . Now, create an obj for by adding to your sibling by age difference.
 const siblingAgeDifference = ({ myAge }) => ({...bio, myAge: myAge - 2 })

 const bio = {
     motherName: 'Sangita',
     myAge: 21
 }
 console.log(siblingAgeDifference(bio))


 // Take an array with 5 colors  create another array by adding two more colors to it.
 const colors = ['RED', 'GREEN', 'WHITE', 'PINK', 'ORANGE']
 const addColors = (colors, newColor1, newColor2) => ([ ...colors, newColor1, newColor2 ])
 console.log(addColors(colors, 'lime', 'gray'))


 // Let’s say we have a function called sum() which calculates the sum of an indefinite amount of numbers. Use rest parameter in it.
 const numbers = [1,2,4, 6, 8, 10]
 const sumOfNumbers = (acc,currentValue) => acc + currentValue
 const addFistandRest = ([ a, ...rest ]) => a + rest.reduce(sumOfNumbers,0 )
 console.log(addFistandRest(numbers))
