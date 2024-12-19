import sayHiTo from "../modules/greeting.js";
// import toNoCase from "to-no-case";
// import camel from "to-camel-case";
// import space from "../node_modules/to-space-case/index.js";
import space from "to-space-case";

// const name1 = toNoCase("Miyamoto Musashi");
// const name2 = camel("Miyamoto Musashi");
const name3 = space("MiyamotoMusashi");
// sayHiTo(name1);
// sayHiTo(name2);
sayHiTo(name3);
