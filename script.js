// <!--@author- Naman Khandelwal -->

const calculateTemp = () => {
  const inputTemp = document.getElementById("degree").value;
  const tempSelected = document.getElementById("temp_type");
  const valueTemp = temp_type.options[tempSelected.selectedIndex].value;

  // Fahrenheit to Celsius
  const fahToCel = (fahrenheit) => {
    let celsius = (((fahrenheit - 32) * 5) / 9).toFixed(2);
    return celsius;
  };

  // Celsius to Fahrenheit
  const celToFah = (celsius) => {
    let fahrenheit = ((celsius * 9) / 5 + 32).toFixed(2);
    return fahrenheit;
  };

  if (valueTemp == "celsius") {
    document.getElementById("temp").innerHTML = celToFah(inputTemp) + "&#176;F";
  } else {
    document.getElementById("temp").innerHTML = fahToCel(inputTemp) + "&#176;C";
  }
};
