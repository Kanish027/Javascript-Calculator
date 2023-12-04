// Event listener to perform the form submission
submit.addEventListener("click", (e) => {
  // Prevents the default form submissin
  e.preventDefault();
  // Retrieves the value of the firstNumber, secondNumber and the operator from the form fields
  const firstNumber = parseFloat(document.querySelector("#firstNumber").value);
  const secondNumber = parseFloat(document.querySelector("#secondNumber").value);
  const operator = document.querySelector("#operator").value;
  const answer = document.querySelector("#answer");

  // Conditions to check whether the input is a valid number or not
  if (isNaN(firstNumber) && isNaN(secondNumber) && operator === "") {
    alert("Please enter valid numbers and select operator");
    return;
  } else if (isNaN(firstNumber) && operator === "") {
    alert("Please enter valid number in number-1 and select operator")
    return;
  } else if (isNaN(secondNumber) && operator === "") {
    alert("Please enter valid number in number-2 and select operator")
    return;
  } else if (isNaN(firstNumber) && isNaN(secondNumber)) {
    alert("Please enter valid numbers in both fields");
    return;
  } else if (isNaN(firstNumber)) {
    alert("Please enter valid number in number-1");
    return;
  } else if (isNaN(secondNumber)) {
    alert("Please enter valid number in number-2");
    return;
  }

  // Performing mathematical calculation using if else (We can also use switch statement to form the same)
  if (operator === "+") {
    answer.value = firstNumber + secondNumber;
  } else if (operator === "-") {
    answer.value = firstNumber - secondNumber;
  } else if (operator === "*") {
    answer.value = firstNumber * secondNumber;
  } else if (operator === "/") {
    answer.value = firstNumber / secondNumber;
  } else {
    alert("Please select an operator");
  }
});

// Whenever any change will occur in any input field such as number-1, number-2 and operator, the answer in the answer field will be erase.

document.querySelector("#firstNumber").addEventListener("input", () => {
  document.querySelector("#answer").value = "";
});

document.querySelector("#secondNumber").addEventListener("input", () => {
  document.querySelector("#answer").value = "";
});

document.querySelector("#operator").addEventListener("input", () => {
  document.querySelector("#answer").value = "";
});
