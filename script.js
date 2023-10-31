function convertToFahrenheit(temperature) {
  return (temperature * 9/5) + 32;
}

function convertToCelsius(temperature) {
  return (temperature - 32) * 5/9;
}

let isCelsius = true;

function toggleTemperatureUnit() {
  const temperatureElement = document.getElementById('temp2');
  const unitSymbolElement = document.querySelector('.text-body-secondary');
  let temperatureValue = parseFloat(temperatureElement.textContent);

  if (isCelsius) {
    temperatureValue = convertToFahrenheit(temperatureValue);
    unitSymbolElement.textContent = ' °F';
  } else {
    temperatureValue = convertToCelsius(temperatureValue);
    unitSymbolElement.textContent = ' °C';
  }

  temperatureElement.textContent = temperatureValue.toFixed(2);
  isCelsius = !isCelsius;
}

const toggleUnitButton = document.getElementById('toggleUnitButton');
toggleUnitButton.addEventListener('click', toggleTemperatureUnit);
