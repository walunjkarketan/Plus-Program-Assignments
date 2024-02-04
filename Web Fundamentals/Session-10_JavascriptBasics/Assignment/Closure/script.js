// Function to create a counter
function counter() {

    let count = 0;
    return function() {
      count++;
      return count;
    };
  }
  
  // Create instances of the counter function
  const firstCounter = counter();
  const secondCounter = counter();
  
  const firstValues = [];
  const secondValues = [];
  
  // Call firstCounter function five times and store the returned values
  for (let i = 0; i < 5; i++) {
    firstValues.push(firstCounter());
  }
  
  // Call secondCounter function three times and store the returned values
  for (let i = 0; i < 3; i++) {
    secondValues.push(secondCounter());
  }
  
  // Print the arrays
  console.log(`firstValues array: [${firstValues.join(', ')}]`);
  console.log(`secondValues array: [${secondValues.join(', ')}]`);
  