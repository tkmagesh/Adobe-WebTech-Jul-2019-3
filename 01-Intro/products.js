var products = [
	{id : 6, name : 'Pen', cost : 50, units : 20, category : 'stationary'},
	{id : 9, name : 'Ten', cost : 70, units : 70, category : 'stationary'},
	{id : 3, name : 'Len', cost : 60, units : 60, category : 'grocery'},
	{id : 5, name : 'Zen', cost : 30, units : 30, category : 'grocery'},
	{id : 1, name : 'Ken', cost : 20, units : 80, category : 'utencil'},
];

Array methods:
	filter
	forEach
	map
	reduce

1. find out all the stationary products

const staionaryProducts = products.filter(product => product.category === 'stationary');


2. find out the maximum cost from the product list

const maxCost = products.reduce((result, product) => result > product.cost ? result : product.cost, 0);

3. create a new array of products where the cost is discounted by 10%

const discountedProducts = products.map(product => ({...product, cost : product.cost * 0.9}));


4. find the sum of units 
const totalUnits = products.reduce((result, product) => result + product.units, 0);

5. print the following for each product
		We have 20 units of pen at Rs.50 each

products.forEach( ({units, name, cost}) => console.log(`We have ${units} units of ${name} at Rs.${cost} each`));


Important Note :  DO NOT USE the FOR loop