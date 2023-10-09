function calculateBillPerPerson(dishesCosts, numberOfPeople) {
    // Calculate the total cost of all dishes
    const totalCost = dishesCosts.reduce((acc, cost) => acc + cost, 0);
  
    // Calculate the bill per person
    const billPerPerson = totalCost / numberOfPeople;
  
    // Create an object to store the results
    const result = {
      totalBill: totalCost,
      billPerPerson: billPerPerson,
    };
  
    return result;
  }
  
  // Example usage:
  const dishesCosts = [20, 15, 10, 12];
  const numberOfPeople = 4;
  
  const bill = calculateBillPerPerson(dishesCosts, numberOfPeople);
  console.log("Total Bill: $" + bill.totalBill);
  console.log("Bill per Person: $" + bill.billPerPerson);
  