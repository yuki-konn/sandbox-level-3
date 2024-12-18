# JavaScript

### Shortcuts

- `SHIFT` + `ALT` + `DOWN` = Copy the line of code and add below the original line.
- `SHIFT` + `CTRL` + `K` = delete entire line.

### Arrays

Create an empty array.
`const myArray = [];`

Push values into the array.
`myArray.push("I am a string value.)`
`myArray.push(2024)`

### Window object

- It represents the browser and its features.
- Contains JavaScript functions and variables.
- The `id` of HTML elements gets attached to the Window object.

```javascript
function output(message) {
  window.outputTag.innerHTML += message;
}
```

### Bracket Notation

- Similar to array notation.
- Allows you to access an object property with a variable or a string.

```javascript
function bracketNotationExample() {
  const myCar = {
    color: "red",
    year: 2023,
    forSale: false,
  };

  const propertyName = "color";
  const myValue = myCar[properName];

  output(`The ${propertyName} is ${myValue}. <br>`);
}
```

### Default parameter values

`function output(message, outputTag = "outputTag")`

- Parameters can automatically be given a default value.
- When an undefined value is provided, the default value applies.

### Single-line code blocks

```javascript
if (isDone) output("Done!");
else output("Not yet done!");
```

- Curly braces are not required for
  single-line code blocks

### falsey values

- Values that evaluate to false when they are used in a condition.
  - undefined
  - empty string `""`
  - zero `0`
  - `NaN`

### truthy values

- Values that evaluate to tru;e when they are used in a condition.
  - non-empty string `"I'm a string"`
  - non-zero numbers `123`
  - arrays `[]`
  - objects `{}`

### Parameter types

```javascript
function output(message = "", outputTag = "outputTag", shouldAppend = true)
```

- By specifying default values, VSCode automatically pops up information about what type each parameter should be.

### Boolean operators

- `<` Less than
- `<=` Less than or equal
- `>` Greater than
- `>=` Greater than or equal
- `===` Equal
- `!==` Not equal
- `!` Not
  - It returns the opposite of the condition.
  - It returns false if the condition is true.
  - It returns true if the condition is false.
- `&&` And
  - It returns true when both conditions are true.
  - It returns false if both conditions are not true.
  - It returns false if any of the conditions are false.
- `||` Or
  - It returns true if any of the conditions are true.
  - It returns false if none of the conditions are true.

### Property chaining

`const cylinderCount = myCar.components.engine.parts.cylinders.count;`

- Using object dot notation, properties can be chained together.
- Access deeper property levels with just one line.
- Like accessing a file embedded in mulitiple folders.

### Item chaining

`const value = myArrays[0][2];`

- Using array notation, items can be chained together.
- Access deeper array levels with just one line.

### Item and property chaining

`const value = event.target[0].value;`

- Using array and object dot notation, items and properties can be chained together.
- Access deeper array and object levels with just one line.

### Event object properties

`event = new Event()`

- To view the properties of the event object, set the default value.

## Loops

### for `of`

How to iterate through all the items in an array with for of

1. Use the keyword `for`.
2. Declare a changing variable with `let`.
3. Use the keyword `of`.
4. Include the array.

```javascript
function forOfExample() {
  const myArray = ["Dog", 8, true];

  for (let item of myArray) {
    output(`${item}<br>`, undefined, "this is not right");
  }
}
```

### for `in`

How to iterate through all the items in an object with `for in`.

1. Use the keyword `for`.
2. Declare a changing variable with `let`.
3. Use the keyword `in`.
4. Include the object.

```javascript
function forInExample() {
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
```

## Class

### Keyword `class`

```javascript
class Column {
  openingTag = "<div class='col'>";
  closingTag = "</div>";
  innerHTML = "";
}

function classExample() {
  const column1 = new Column();
  column1.innerHTML = "I'm column 1";
  const column2 = new Column();
  column2.innerHTML = "I'm column 2";
  const column3 = new Column();
  column3.innerHTML = "I'm column 3";
}
```

### `class` Method

- A method is a function in an object or class.
- In a class, the keyword `function` is not used for methods.

```javascript
class Car {
  color = "red";

  honkHorn() {
    console.log("Honk honk!");
  }
}

function methodExample() {
  const car = new Car();
  car.honkHorn();
}
```

### Keyword `this`

- Use the keyword `this` to access properties and methods from within an object.
- Use the usual dot notation.
- Think of `this` as the name of the object.

```javascript
class Car {
  color = "red";

  info() {
    console.error("The color is " + this.color);
  }
}

function thisExample() {
  const car1 = new Car();

  car1.color = "black";

  car1.info();
}
```

### `toString` Method

- The `toString` method customizes how an object is output.
- This method is automatically called when the object is used like a string.
- Every class has it's own `toString` method.
- Without this method it would output `[object Object]`.

```javascript
class Car {
  color = "red";

  toString() {
    return "This car's color is " + this.color;
  }
}

function toStringExample() {
  const car = new Car("red");
  output(car);
}
```

### `Constructor` Method

- The `constructor` is a method that automatically runs when the object is created.
- Use the `constructor` to accept parameters and initialize values.
- Every class has it's own empty `constructor`.

```javascript
class Column {
  openingTag = "<div class='col'>";
  closingTag = "</div>";
  innerHTML = "";

  constructor(content = "") {
    console.log("The content of this column will be: " + content);
    this.innerHTML = content;
  }
}

function contructorExample() {
  const column = new Column("This is column 1.");
}
```

<!-- ###

````javascript

``` -->
