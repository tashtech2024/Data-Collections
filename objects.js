//object syntax - properties are inside - details of car
const cars = [];
console.log(cars);
// array
const myOldcar = {}
const vehicle = {
	color: "blue",
	year: "2024",
	brand: "Toyota",
	model: "Tundra",
	isElecetric: false,
	milage: 1000,
	exteriorColor: 'blue',

	// "active registration":true,
	// This one is correct//
	// activeRegistration: true,
};
console.log(vehicle);
console.log(vehicle.color);
console.log(vehicle.isElecetric);
console.log(vehicle.milage);

console.log(vehicle["year"]);

// DELETES AN OBJECTS PROPERTY//
console.log(["active registration"]);

// ADD A NEW PROPERTY //
vehicle.activeRegistration = false;
vehicle.package = 'Tech Package';

//  
vehicle.model = 'Camry';

vehicle.engine = {
	cylinders: 6,
	hp: 4000,
	size: 3.2
}
console.log(vehicle);
// can used . notations to access objects
console.log(vehicle.engine.size);

// 
for (const key in vehicle) { }
// console.log(key);
// console.log(vehicle[key]);
// console.log('$[key]: ${vehicle[key]}');

// Iterating through Objects
// console.log(vehicle[key]);

// myOldcar.brand = 'Honda';
// myOldcar.year = '2000';
// myOldcar.color = 'White'
// console.log(myOldcar);

let myMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];
let yourMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

console.log(myMovies == yourMovies); // false

const vehicle1 = {
	color: "blue",
	year: 1989,
	make: "Audi",
	engine: {
		cylinders: 6,
		hp: 4000,
		size: 3.2
	}
}

const vehicle2 = {
	color: "blue",
	year: 1989,
	make: "Audi",
	engine: {
		cylinders: 6,
		hp: 4000,
		size: 3.2
	}
}
console.log(vehicle1 == vehicle2); // false
console.log(vehicle1.color == vehicle2.color); // true
console.log(vehicle1.year == vehicle2.year); // true
console.log(vehicle1.engine == vehicle2.engine); // False - 
console.log(vehicle1.engine.cylinders === vehicle2.engine.cylinders);

// When to use Objects or Arrays
// The name of your dog?
// The age of your dog?
// Your dog's favorite things?
// Whether your dog can speak French?
// Whether your dog can solve a Rubik's cube?

const myDog = {
	Name: "Nova",
	Age: 2,
	favoritethings: "Bones and Me",
	Language: false,
	Rubikscube: true,
}
console.log(myDog);

//======== PRODUCTS ====///
const products = [];

const tv = {
	brand: 'Sony',
	price: 350,
	isInStock: true,
	details: {
		color: 'black',
		size: ['42 inches', '55 inches'],
		smartTv: true,
		touchScreen: false,
	},
	isOnSale: true,
	catageries: ['home', 'tech', 'outdoor',]

}
const pc = {
	brand: 'Dell',
	price: 500,
	isinStock: true,
	details: {
		color: 'white',
		size: '16 inches',
		isOnSale: false,
		catageries: ['home', 'tech']
	}
}

const sneakers = {
	brand: 'Nike',
	price: 80,
	isinStock: true,
	details: {
		colors: ['black', 'white', 'red'],
		size: ['7', '8', '9', '10'],
	}, isOnSale: false,
	catagories: ['Sports', 'outdoors']
}

products.push(tv);
products.push(pc);

console.log(products);

// Loops over the array of products

// Loops over the array of products

for (const product of products) {
	// console.log(product);

	if (product.details.touchScreen) {
		console.log(`This ${product.brand} is touch screen and is $${product.price}`);
	}

	if (product.isOnSale) {
		console.log(`
        This ${product.brand} product 
        is on sale for $${product.price}
        `);
	}

	if (product.price >= 100 && product.price <= 350) {
		console.log(`
        We found a:
        ${product.brand} for $${product.price}
        `);
	}


}

for (const product of products) {
	console.log(product);

	if (product.isOnSale) {
		console.log(`
        This ${product.brand} product 
        is on sale for $${product.price}
        `);
	}

	if (product.price >= 100 && product.price <= 350) {
		console.log(`
        We found a:
        ${product.brand} for $${product.price}
        `);
	}
}
// Loops over an Object 

for (const key in sneakers) {
	console.log('{key}: ${sneakers[key]}');
}