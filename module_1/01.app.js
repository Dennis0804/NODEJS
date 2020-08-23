//jshint 文件名 可以查看错误信息
/* 
//1. path module
const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj); */

//2. load OS module
/* const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);
console.log(`Free Memory: ${freeMemory}`);
 */

//3. file module
/* const fs = require('fs');
 const files = fs.readdirSync('./');
console.log(files); 

fs.readdir('./', function(err, files) {
  if (err) {
    console.log('Error', err);
  }
  else {
    console.log('Result', files);
  }
});
*/


//4. Event module

const EventEmitter = require('events');



//emit means signalling here

const Logger = require('./logger');
const logger = new Logger();
//Register a listener 注意顺序
logger.on('messageLogged', (arg) => {
  console.log('Listener called', arg);
});

logger.log('message');
