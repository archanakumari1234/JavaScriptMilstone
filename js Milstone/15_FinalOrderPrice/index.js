const calculateTotalCost = (cart) =>
  cart.reduce((total, item) => total + item.unitPrice * item.quantity, 0);

// Example usage:
const customerCart = [
  { unitPrice: 10, quantity: 2 },
  { unitPrice: 5, quantity: 3 },
  { unitPrice: 8, quantity: 1 },
];

const totalCost = calculateTotalCost(customerCart);
console.log("Total Cost: $" + totalCost);
