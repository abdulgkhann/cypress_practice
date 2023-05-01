/* literals - basically how you can define that data type
for eg: 
Object = {}
string = ''
boolean = true / false
similarly for defining paragraph like variables or multiline varialbe we use `` (tilt before key number 1)
 */

let givename = 'Abdul G Khan';

let now = new Date();
let duration = now.getHours();
console.log(duration);

//using ternary operator for adding greeting logic
let greeting = (
    duration > 20 ? "night":
    duration > 16 ? "evening" :
    duration >= 12 ? "afternoon" :
    "morning"
    );

//below is example of tempalte literal - here values are also passed through variables using ${var}
let varTemplateLiteral = `Hi there
good ${greeting},
hope you are doing good!!!

Regards,
${givename}`;

console.log(varTemplateLiteral);