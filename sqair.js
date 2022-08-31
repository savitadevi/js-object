var a = require('readline-sync');
var n = a.questionInt('How many more times? ');
d = {}
for (let i = 0; i <= n; i++) {
    d[i] = i ** 2
}
console.log(d);



// ===================================================




var a = require("readline-sync")
var b = a.question("enter your number")
c = {}
for (var i = 0; i <= b; i++) {
    c[i] = i * i

}
console.log(c)