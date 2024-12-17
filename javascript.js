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

function propertyChaining() {
  debugger;
  const myCar = {
    components: {
      engine: {
        parts: {
          cylinders: { count: 4 },
        },
      },
    },
  };

  const cylinderCount = myCar.components.engine.parts.cylinders.count;
  output(cylinderCount, "propertyChainingTag", false);
}

function itemChaining() {
  const myArrays = [
    [1, 2, 3],
    ["d", "o", "g"],
    ["s", " ", "!"],
  ];

  const value1 = myArrays[0][2]; // 3
  const value2 = myArrays[2][1]; //
  const value3 = myArrays[1][0]; // d
  const value4 = myArrays[1][1]; // o
  const value5 = myArrays[1][2]; // g
  const value6 = myArrays[2][0]; // s
  const value7 = myArrays[2][2]; // !

  output(value1, "itemChainingTag", false);
  output(value2, "itemChainingTag");
  output(value3, "itemChainingTag");
  output(value4, "itemChainingTag");
  output(value5, "itemChainingTag");
  output(value6, "itemChainingTag");
  output(value7, "itemChainingTag");
}
