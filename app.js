let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      // Check if the string contains a percentage expression
      if (string.includes("%")) {
        // Extract the number and percentage value
        let parts = string.split("%");

        console.log(parts);
        console.log(parts[0]);

        let num = parseFloat(parts[0]);
        console.log(num);
        let result = parseFloat(parts[0]) / 100;
        console.log(result);
        // Calculate the result
        //let result = num * percentage;
        // Display the result
        document.querySelector("input").value = result;
        // Update the string
        string = result.toString();
      } else {
        // Regular evaluation
        string = eval(string);
        document.querySelector("input").value = string;
      }
    } else if (e.target.innerHTML === "AC") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML === "X") {
      string = string.slice(0, -1);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML === "%") {
      string += "%";
      document.querySelector("input").value = string;
    } else {
      string += e.target.textContent.trim() + "";
      document.querySelector("input").value = string;
    }
  });
});

