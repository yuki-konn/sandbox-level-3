function bracketNotationExample() {
  debugger;
  const myCar = {
    color: "red",
    year: 2023,
    forSale: false,
  };

  const propertyName = "color";
  const myValue = myCar[propertyName];

  output(`The ${propertyName} is ${myValue}. <br>`);
}

function greetingExample() {
  debugger;
  output("Hello World! ", "greetingTag");
}

function overwriteExample() {
  debugger;
  output("Hello World! ", "overwriteTag", false);
}
