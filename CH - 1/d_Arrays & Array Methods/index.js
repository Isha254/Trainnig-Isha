// --- d. Arrays & Array Methods ---

/* Given a list of products with prices, create a new array with products
that cost more than $50. */


const products = [
  { name: 'Book', price: 30 },
  { name: 'bottle', price: 60 },
  { name: 'pen', price: 45 },
  { name: 'bag', price: 80 },
];
const expensiveProducts = products.filter(product => product.price > 50);
console.log( expensiveProducts);




