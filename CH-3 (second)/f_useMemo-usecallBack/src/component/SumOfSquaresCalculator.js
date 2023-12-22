import React, { useState, useMemo, useCallback } from 'react';

const SumOfSquaresCalculator = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  // Memoize the calculation of the sum of squared numbers
  const sumOfSquares = useMemo(() => {
    console.log('Calculating sum of squares...');
    return numbers.reduce((acc, num) => acc + num ** 2, 0);
  }, [numbers]);

  // Memoize the event handler using useCallback
  const handleCalculateClick = useCallback(() => {
    console.log('Button clicked!');
    // Your custom logic here (if any)
  }, []);

  const handleAddNumberClick = useCallback(() => {
    const newNumber = Math.floor(Math.random() * 10) + 1;
    setNumbers([...numbers, newNumber]);
  }, [numbers]);

  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>

      <button onClick={handleAddNumberClick}>Add Number</button>

      <h2>Sum of Squares: {sumOfSquares}</h2>
      <button onClick={handleCalculateClick}>Calculate Sum of Squares</button>
    </div>
  );
};

export default SumOfSquaresCalculator;
