// 1. Use named import to import specific exports
// import { function name or variable name } from "file path";

import { apiKey, url as googleUrl } from "./util.js"; // named export, use 'as' to rename
import anyName from "./util.js"; // default export

console.log(apiKey);
console.log(googleUrl);
console.log(anyName);

// 2. Use wildcard import to import all exports as an object

/* import * as Util from "./util.js"; // import all exports as an object
console.log(Util.apiKey);
console.log(Util.url);
console.log(Util.default); */
