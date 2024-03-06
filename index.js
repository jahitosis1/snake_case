import { snakeCase } from 'snake-case';
// importing something installed via npm install doesn’t need to be prefixed with “./” It'll look for the module in the node_modules/ folder

console.log(snakeCase('thisIsInCamelCase'));
