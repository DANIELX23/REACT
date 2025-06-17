import React from 'react';


return ( <
        div style = {
            { padding: '20px', maxWidth: '300px' }
        } > ) /
    &
    gt;



<
h3 > Temperature Converter < /h3> <input type="number"></input >
    value = { celsius }
onChange = {
    (e) => setCelsius(e.target.value)
}
placeholder = "Enter Celsius"

p & gt; {celsius !== '' && `${celsius}°C =  = $ {toKelvin(celcius)}k° = = ${tofahrenheit(celsius)}°F}
p & gt;
div & gt;

export default TemperatureConverter; < /div>