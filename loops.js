function forOfExample() {
  /****************************************
   * HOW TO ITERATE THROUGH ALL THE ITEMS
   * IN AN ARRAY WITH for of
   *
   * 1. USE THE KEYWORD for
   * 2. DECLARE A CHANGING VARIABLE WITH let
   * 3. USE THE KEYWORD of
   * 4. INCLUDE THE ARRAY
   ****************************************/
  debugger;

  const myArray = ["Dog", 8, true];

  for (let item of myArray) {
    output(`${item}<br>`, undefined, "this is not right");
  }
}

function forInExample() {
  /****************************************
   * HOW TO ITERATE THROUGH ALL THE ITEMS
   * IN AN OBJECT WITH for in
   *
   * 1. USE THE KEYWORD for
   * 2. DECLARE A CHANGING VARIABLE WITH let
   * 3. USE THE KEYWORD in
   * 4. INCLUDE THE OBJECT
   ****************************************/
  debugger;

  const myObject = {
    myString: "Cat",
    myNumber: 12,
    myBoolean: false,
  };

  for (let propertyName in myObject) {
    const value = myObject[propertyName];
    output(`${propertyName} is ${value}<br>`, "outputTag1");
  }
}
