// Create a customer object with a name and balance
const customer = {
    name: "John Doe",
    balance: 1000, // Initial balance
  };
  
  // Function to deposit money into the customer's account
  function deposit(customer, amount) {
    if (amount <= 0) {
      console.log("Invalid deposit amount.");
      return;
    }
  
    customer.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${customer.balance}`);
  }
  
  // Function to withdraw money from the customer's account
  function withdraw(customer, amount) {
    if (amount <= 0 || amount > customer.balance) {
      console.log("Invalid withdrawal amount or insufficient balance.");
      return;
    }
  
    customer.balance -= amount;
    console.log(`Withdrawn $${amount}. New balance: $${customer.balance}`);
  }
  
  // Example usage:
  console.log(`Account holder: ${customer.name}`);
  console.log(`Initial balance: $${customer.balance}`);
  
  deposit(customer, 500); // Deposit $500. New balance: $1500
  withdraw(customer, 200); // Withdraw $200. New balance: $1300
  withdraw(customer, 1500); // Invalid withdrawal amount or insufficient balance.
  deposit(customer, -100); // Invalid deposit amount.
  