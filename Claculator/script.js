function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function calculate() {
    let display = document.getElementById('display');
    let result = eval(display.value);
    display.value = result;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  