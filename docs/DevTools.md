# Dev Tools

### Console

- JavaScript commands can be entered directly
- Can be used to explore the properties of objects

## Debugger

- use the `debugger` to explore the properties of objects

### Step into button

- Runs code 1 line at a time and goes into functions.

### Step over button

- Runs code 1 line at a time, but skips over function code.

### Step out button

- Runs code until it's out of the current function.

### Breakpoints

- Stops running code when it reaches the selected lines.
- Click on the line to place a red breakpoint dot.
- Not all lines can have a breakpoint.

### Conditional breakpoints

- Stops running code at the selected line if a condition is met.
- Must specify the condition.
  - Right click on a breakpoint then specify the condtion.
  - Condition example: item === 2000

### Logging to the console

```javascript
console.log("This is a message.");
console.warn("This is a warning.");
console.error("This is a error.");
```

- Display messages in the console instead of the web page.
- For debugging purposes or quick output.
- `console.warn`
  - Highlights the message with yellow.
  - Provides info where the console command was run.
  - Example: Can be used to specify that a parameter is not being used correctly.
- `console.error`
  - Highlights the message with red.
  - Provides info where the console command was run.
  - Example: Can be used to specify that a parameter is not being used correctly.
