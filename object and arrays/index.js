const movie = {
	name: "Man of Steel",
	rating: 7,
	release: 2013,
	lead: {
		name: "Henry Cavill",
		age: 36,
	},
	director: {
		name: "Zack Snyder",
		otherMovies: ["300", "Batman v Superman"]
	}
}

const updateAge = (movie) => ({
	...movie,
	lead: {
		...movie.lead,
		age: 40
	}
})
console.log(updateAge(movie))
console.log(movie)


const fruits = ['banana', 'orange', 'mango'];

// ## ex04: add watermelon
const addFruit = (fruits, fruitName) => ([...fruits, fruitName])
console.log(addFruit(fruits, 'pineapple'))
console.log(fruits)

// hw: add fruit at start
const addFruitAtStart = (fruits, fruitName) => ([fruitName, ...fruits])
console.log(addFruitAtStart(fruits, 'guava'))

// ex05: change orange to citrus
const replaceFruit = (fruits, fruitName, newFruitName) => fruits.map(fruit => fruit === fruitName ? newFruitName : fruit)
console.log(replaceFruit(fruits, "orange", "citrus"))


// ex06: remove citrus
const filterFruit = (fruits, fruitName) => fruits.filter((fruit) => fruit !== fruitName)
console.log(filterFruit(fruits, "orange"))

//ex07: change fruit by index
const changeFruitByIndex = (fruits, newFruit, newFruitIndex) => fruits.map((fruit, idx) => idx === newFruitIndex ? newFruit : fruit)
console.log(changeFruitByIndex(fruits, "citrus", 1))

// ex08: insert item at an index
const insertFruitAtIndex = (fruits, fruitName, fruitIndex) => ([...fruits.slice(0, fruitIndex), fruitName, ...fruits.slice(fruitIndex)]);
console.log(insertFruitAtIndex(fruits, "cherry", 1))

// let's mix it up

const fruitBasket = [{
		id: 1,
		name: "mango",
		quantity: 5
	},
	{
		id: 2,
		name: "apple",
		quantity: 4
	},
	{
		id: 3,
		name: "banana",
		quantity: 12
	},
	{
		id: 4,
		name: "strawberry",
		quantity: 4
	}, // aah! ameeri!
]


// ex01: update quantity
const updateBasketQuantity = (fruitBasket, id, incordec) => incordec ? [...fruitBasket, fruitBasket[id - 1]] : fruitBasket;
console.log(updateBasketQuantity(fruitBasket, 2, true))