# JavaScript

### Shortcuts

`SHIFT` + `ALT` + `DOWN` = shortcut to copy a line of code and add below the original line

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
