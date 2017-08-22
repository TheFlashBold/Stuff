let crypto = require('crypto');

let validTime = 30; // seconds
let codeLength = 5; // max 32 due to md5

let time = ((new Date() / 1)/1000/60/validTime).toFixed(0);
let userid = 2142435345267;

let p = time * 21424353;

let c = crypto.createHash('md5').update(p.toString()).digest("hex").slice(-codeLength);

console.log(time, userid, p, c);