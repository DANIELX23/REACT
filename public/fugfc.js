import React, { useState } from 'react';

export default function App() {
    const [temp, setTemp] = useState('');
    const [unit, setUnit] = useState('C');
    const convert = () =>
        unit === 'C' ? ((+temp * 9) / 5 + 32).toFixed(2) : (((+temp - 32) * 5) / 9).toFixed(2);

    return ( <
        div style = {
            { textAlign: 'center', marginTop: 50 }
        } >


        <
        h2 > Temp Converter < h2 > { '>' } <
        input value = { temp }
        onChange = { e => setTemp(e.target.value) }
        placeholder = { unit }
        /> <
        select value = { unit }
        onChange = { e => setUnit(e.target.value) } >
        <
        option value = "C" > Celsius < /option> <
        option value = "F" > Fahrenheit < /option> < /
        select > <
        p > Converted: { temp && convert() }° { unit === 'C' ? 'F' : 'C' } < /p> < /
        div >
    );
}