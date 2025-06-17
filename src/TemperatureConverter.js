import React, { useState } from 'react';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [converted, setConverted] = useState(null);
  const [unit, setUnit] = useState('fahrenheit');

  const convertTemperature = () => {
    const c = parseFloat(celsius);
    if (isNaN(celsius) || celsius === '') {
      setConverted(null);
      return;
    }

    let result;
    if (unit === 'fahrenheit') {
      result = ((c * 9) / 5 + 32).toFixed(2) + ' °F';
    } else if (unit === 'kelvin') {
      result = (c + 273.15).toFixed(2) + ' K';
    }

    setConverted(`${celsius}°C = ${result}`);
  };

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '350px', 
      fontFamily: 'Arial', 
      backgroundColor: '#000', 
      color: 'gold', 
      borderRadius: '8px' 
    }}>
      <h3>Temperature Converter</h3>

      <input
        type="number"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
        placeholder="Enter Celsius"
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />

      <select
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      >
        <option value="fahrenheit">Convert to Fahrenheit (°F)</option>
        <option value="kelvin">Convert to Kelvin (K)</option>
      </select>

      <button
        onClick={convertTemperature}
        style={{
          padding: '10px 12px',
          backgroundColor: 'gold',
          color: 'black',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          width: '100%',
          fontWeight: 'bold'
        }}
      >
        Convert
      </button>

      {converted && (
        <p style={{ marginTop: '15px', fontSize: '16px' }}>{converted}</p>
      )}
    </div>
  );
};

export default TemperatureConverter;
