# Webpack

<img src="../assets/images/webpack.png" height="120">

- Webpack is a node module that allows other node modules to be used in the browser.
- Packs code into 1 file where exports/imports/requires are not necessary. (copy and paste)

### Package installation

- Needs 2 packages (or node modules) so it can run in the terminal

`npm install webpack webpack-cli`

- `webpack` The main module with function and classes.
- `webpack-cli` A controller that allows webpack to be used in the command line.

### Running Webpack

`npx webpack`

- This command expects the following folder structure.
  - `src` folder with `index.js` inside of it.

### Folder structure

```
> src
  - index.js
```

- The packed (or bundled) file is generated in the `dist` folder as `main.js`
- `dist` stands for distribution
- Change `main.js` to the HTML file instead of the original module.

`<script src="./dist/main.js"></script>`

## Webpack and Babel (command line)

<img src="../assets/images/webpack_babel.png" height="120">

- Webpack can be instructed to compile with Babel

1. `npm install babel-loader`
2. Use Webpack file structure and make changes
3. `npx webpack --module-rules-use babel-loader`
   - `babel-loader` Instructions about how to use Babel to compile
   - `--module-rules-use babel-loader` Tells Webpack to use those instructions
4. Render the React project in the browser.

### Configure Webpack to use Babel to compile

- A configuration file can be used to specify bundling instructions

1. Create `webpack.config.json` file
2. Add a JSON object corresponding to `-module-rules-use babel-loader`
3. Make changes, save, and then run `npx webpack`in the terminal
4. Render the React project in the browser.

<b>JSON for webpack.config.json</b>

```json
{
  "module": {
    "rules": [
      {
        "use": "babel-loader"
      }
    ]
  }
}
```

## Webpack watch

- Webpack can watch for any changes to index.js

1. `npx webpack --watch` in terminal.
2. Make changes
3. Render the React project in the browser
4. Press CTRL + C to exit Webpack watcher

### Configure Webpack to automatically watch for changes

1. Edit `webpack.config.json`
2. Add `"watch": true`
3. Run `npx webpack` in terminal.

- Press CTRL + C to exit Webpack watcher.

<b>JSON for webpack.config.json</b>

```json
{
  "module": {
    "rules": [
      {
        "use": "babel-loader"
      }
    ]
  },
  "watch": true
}
```

## Webpack Source Map

- Some code in the debugger might look different than the original code
- A source map provides instructions how to convert the mangled code back to the original code

1. Add an internal module to the code
2. Start debugging and observe the internal module
3. `npx webpack --devtool source-map`
4. Debug and observe the internal module

webpack.config.json

```json
{
  "devtool": "source-map"
}
```

### Configure Webpack to automatically produce a source map

1. Edit `webpack.config.json`
2. Add `"devtool": "source-map"`
3. Save the file and then run`npx webpack` in the terminal.

<b>JSON for webpack.config.json</b>

```json
{
  "module": {
    "rules": [
      {
        "use": "babel-loader"
      }
    ]
  },
  "watch": true,
  "mode": "development",
  "devtool": "source-map"
}
```

### webpack.config.json

This allows `npx webpack` to:

- Compile using babel
- automatically watch for changes
- allows use of debugger
- automatically produce source map

```json
{
  "module": {
    "rules": [
      {
        "use": "babel-loader"
      }
    ]
  },
  "watch": true,
  "mode": "development",
  "devtool": "source-map"
}
```
