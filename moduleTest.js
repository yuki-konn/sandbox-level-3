/************************************************
 * - import USES CODE FROM ANOTHER JAVASCRIPT FILE.
 *
 * - SYNTAX
 *  - USE A PAIR OF CURLY BRACES.
 *  - INSERT THE MODULE NAME.
 *  - USE THE KEYWORD from
 *  - INCLUDE THE PATH OF THE FILE IN QUOTATIONS.
 *   - USE A ./ TO REPRESENT THE CURRENT FOLDER.
 *   - RELATIVE PATH NOTATION USES THE DOT AND FORWARD SLASH.
 * - THE KEYWORD import TURNS THIS FILE INTO A MODULE.
 * - THE type ATTRIBUTE MUST BE SET TO "module".
 *   <script src="moduleTest.js" type="module"></script>
 * - TO USE A MODULE IN AN HTML FILE, IT MUST BE ATTACHED
 *   TO THE window OBJECT.
 * - IT'S ONLY NECESSARY TO ATTACH A MODULE TO THE WINDOWS OBJECT
 *   IF THE MODULE WILL BE DIRECTLY USED BY THE HTML FILE.
 ************************************************/

// LOOKS IN THE CURRENT FOLDER FOR THE FILE module.js
// import AUTOMATICALLY DISCONNECTS testModule FROM window object
import { testModule } from "./module.js";
import { outputModule } from "./outputModule.js";

// RECONNECTS THE moduleExample TO window object
window.moduleExample = moduleExample;

function moduleExample() {
  debugger;
  testModule();
  outputModule("This is the outputModule.");
}
