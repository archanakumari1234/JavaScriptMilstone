const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (originalPrice <= 0 || discountedPrice <= 0 || discountedPrice >= originalPrice) {
      return "Invalid input";
    }
  
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
  
    return discountPercentage.toFixed(2); // Round to two decimal places
  };
  
  const originalPrice = 100;
  const discountedPrice = 80;
  
  const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
  console.log(`Discount Percentage: ${discountPercentage}%`);
  