//Refers to the default export of module "module-name" is the module to import from
//import defaultExport from "module-name";
// name refers to an object that is used as a kind of namespace when refering to the import. all of the modules in "module-name" can now be referred to with name using the . operator
//import * as name from "module-name";

//importing from exportExample.js

// !--> Follow ES6 instructions to use import with node using experimental-modules and .mjs formatting <--!
import { square, vector_len} from 'exportExample'

console.log(square(11));
console.log(vecor_len(4, 3));