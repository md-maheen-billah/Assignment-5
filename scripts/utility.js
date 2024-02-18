function setElementValueById(elementId, value) {
  document.getElementById(elementId).innerText = value;
}
function totalCost(id, value) {
  const totalCost = document.getElementById(id).innerText;
  const convertedTotalCost = parseInt(totalCost);
  const sum = convertedTotalCost + parseInt(value);
  setElementValueById(id, sum);
}

function getInputValueById(elementId) {
  const input = document.getElementById(elementId);
  const inputValue = input.value;
  return inputValue;
}
function addBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
