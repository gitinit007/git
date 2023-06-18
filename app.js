document.getElementById("calculateBtn").addEventListener("click", function () {
  let num1 = parseFloat(document.getElementById("num1").value);
  console.log(num1);
  let num2 = parseFloat(document.getElementById("num2").value);
  console.log(num2);
  let operation = document.getElementById("operation").value;
  console.log(operation);

  console.log("just checking out pull and fetch in git");
  console.log("checking out pull and fetch in git");

  let result;
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "sub":
      result = num1 - num2;
      break;
    case "mul":
      result = num1 * num2;
      break;
    case "div":
      if (num2 != 0) {
        result = num1 / num2;
      } else {
        result = "Cannot divide by zero";
      }
      break;
  }

  document.getElementById("result").innerText = result;
});
