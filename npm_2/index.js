/* 
  require module three step：
  1. Core module
  2. File or folder ./file_name.js in the same folder or underscore/index.js
  3. node_modules inside the node_modules 
*/

var _ = require('underscore');
const { contains } = require('underscore');

var result = _.contains([1, 2, 3], 2);
console.log(result);
