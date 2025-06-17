import { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleCalculation = (operation) => {
    let res;
    switch (operation) {
      case 'add':
        res = num1 + num2;
        break;
      case 'subtract':
        res = num1 - num2;
        break;
      case 'multiply':
        res = num1 * num2;
        break;
      case 'divide':
        res = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        break;
      default:
        res = null;
    }
    setResult(res);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold">Simple Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(parseFloat(e.target.value) || 0)}
        className="border p-2 rounded w-full mb-2"
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(parseFloat(e.target.value) || 0)}
        className="border p-2 rounded w-full mb-2"
        placeholder="Enter second number"
      />
      <div className="flex justify-around">
        <button className="p-2 bg-blue-500 text-white rounded" onClick={() => handleCalculation('add')}>+</button>
        <button className="p-2 bg-blue-500 text-white rounded" onClick={() => handleCalculation('subtract')}>-</button>
        <button className="p-2 bg-blue-500 text-white rounded" onClick={() => handleCalculation('multiply')}>×</button>
        <button className="p-2 bg-blue-500 text-white rounded" onClick={() => handleCalculation('divide')}>÷</button>
      </div>
      {result !== null && (
        <div className="mt-4 p-2 bg-gray-100 rounded">Result: {result}</div>
      )}
    </div>
  );
};

export default Calculator;
