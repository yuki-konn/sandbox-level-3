# JavaScript Module

## Module

### Module

- Modules allow the code in a JavaScript file to be used in other JavaScript files.
- Modules use the keywords `export` and `import`

### Keyword `export`

- `export` allows code to be used by other JavaScript files.
- The keyword `export` turns this file into a module.

```javascript
export function testModule() {
  console.log("This is a module");
}
```

### Keyword `import`

- `import` uses code from another JavaScript file.
- The `type` attribute must be set to `module`.<br>
  Example: `<script src="moduleTest.js" type="module"></script>`
- To use a module in an HTML file, it must be attached to the `window` object.
- It's only necessary to attach a module to the `window` object. If the module will be directly used by the HTML file.
- The property name doesn't need to match the module name.<br>
  Example: `window.moduleExample = myModule;`

Syntax:

1. Use a pair of curley braces.
2. Insert the module name.
3. Use keyword `from`
4. Include the path of the file in quotations.

   - Use a `./` to represent the current folder.
   - Relative path notation uses the `.` and `/`.

Note: `import` automatically disconnects functions in the file. So use `window` object to reconnect.

```javascript
// LOOKS IN THE CURRENT FOLDER FOR THE FILE module.js
import { testModule } from "./module.js";
import { outputModule } from "./outputModule.js";

// RECONNECTS THE moduleExample TO window object
window.moduleExample = myModule;

function myModule() {
  testModule();
  outputModule("This is the outputModule.");
}
```

### Function Hoisting

- JavaScript invisibly brings function definitions to the top.
- Functions can be called before they are defined in a file.

### Object Oriented Programming (OOP)

- Create objects that bundle related data and functions together.
- The keywords `class`, `new`, and `this` are used to achieve OOP.

`const column = new Column("my content");`

### Folder structure

```
> controllers
> modules
> utils
```

- `modules` Contains functions specific to the project.
- `utils` Contains functions that can be used by other projects.
- `controllers` Contains functions that control the flow of how modules are used.<br>Example: `moduleTest.js`
- Usually 1 function or class per file.

### Relative file paths

- `./` Look in the current folder
- `../` Go back one folder

### Module errors

- Uncaught SyntaxError: Cannot use import statement outside a module.
  - Fix: Put `type = "module"` in script tag.
  - Example: `<script src="./moduleTest.js" type="module"></script>`
- GET http://localhost:8081/utils/output new::ERR_ABORTED 404 (Not Found)
  - Fix: Add `.js` on end file name.
  - Example: `import { outputModule } from "./outputModule.js";`

### Automatic import

1. Open the module file `outputModule.js`
2. Open the file that will import the module `moduleTest.js`
3. Start typing the module
4. Select the module from the popup list.

### How to find the class of an item

1. Use the `debugger` to explore the object.
2. The class is in the `[[Prototype]]`

### Node.js

- A program that can run JavaScript files in the terminal.
- Node.js is JavaScript for the backend.
- Slightly different than JavaScript for the frontend.
- To run a file type `node greeting.js`

### NPM

- Node Package Manager
- A program that comes with Node.js
- Lets Node.js use modules.
- Use npm to install code from other JavaScript programmers.
- [www.npmjs.com](https://www.npmjs.com/)

### How to configure Node.js for modules

1. Initialize NPM

   - `npm init`
   - Select the default options by pressing ENTER.

2. It creates `package.json`
3. Add `"type": "module"`

### package.json

1. Configuration file for Node.js
2. A file with JavaScript Object Notation
3. Installed node modules are listed in this file.

### Named exports/imports

`export function output(message) ...`

`import { outputModule } from "./outputModule.js";`

- Must use curly braces.
- Must use the exact module name.
- There can be multiple named exports in a file.

### Default exports/imports

greeting.js
`export default function greeting(name) ...`

greetingTest.js
`import sayHiTo from "./greeting.js";`

- Do not use curly braces
- Can use a different name than the module.
- Add the `default` keyword to the export.
- There can only be 1 default export per file.

### require function

`var toNoCase = require('to-no-case');`

- The old way of importing modules.
- Not compatible with web browsers even though it's JavaScript
- Can be repalced with default import syntax.
  - `import toNoCase from "to-no-case";`

### Node modules

`npm install to-no-case`

- Node modules are reusable code that can be installed with NPM.
- NPM commands start with `npm`
- Add the `install` command to install a module from npmjs.org
- May not be compatible with the browser.

### Internal modules

`import sayHiTo from "../modules/greeting.js";`

- Modules that were created in the project.
- Must be imported with relative path notation.

### External modules

`import toNoCase from "to-no-case";`

- Modules that were installed from NPM.
- Must be imported with their package name.
