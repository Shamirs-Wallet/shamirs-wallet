const sss = require('shamirs-secret-sharing-ts')
const secret = Buffer.from('merit bike intact roast insect tomorrow member peanut lady token cannon love tonight ask ski earn sense board chat more cherry muffin deal scissors')
const shares = sss.split(secret, { shares: 5, threshold: 3 });

console.log("Key1: " + shares[0].toString('base64') + "\n\r");
console.log("Key2: " + shares[1].toString('base64') + "\n\r");
console.log("Key3: " + shares[2].toString('base64') + "\n\r");
console.log("Key4: " + shares[3].toString('base64') + "\n\r");
console.log("Key5: " + shares[4].toString('base64') + "\n\r");

const recovered = sss.combine([shares[2], shares[4], shares[3]]);

console.log(secret.toString());
console.log(recovered.toString());

console.log(secret.toString() === recovered.toString());
