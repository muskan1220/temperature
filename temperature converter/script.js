function convertTemperature() {
  // Get the input and output elements
  var celsiusInput = document.getElementById("celsius");
  var fahrenheitOutput = document.getElementById("fahrenheit");

  // Get the temperature in Celsius
  var celsius = parseFloat(celsiusInput.value);

  // Check if the input is a valid number
  if (!isNaN(celsius)) {
    // Convert Celsius to Fahrenheit
    var fahrenheit = (celsius * 9) / 5 + 32;

    // Update the Fahrenheit output value with 2 decimal places
    fahrenheitOutput.value = fahrenheit.toFixed(2);
  } else {
    // Clear the Fahrenheit output value if the input is not a valid number
    fahrenheitOutput.value = "";
  }
}
