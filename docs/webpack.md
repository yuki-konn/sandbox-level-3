# Webpack

- Webpack is a node module that allows other node modules to be used in the browser.
- Packs code into 1 file where exports/imports/requires are not necessary.

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
