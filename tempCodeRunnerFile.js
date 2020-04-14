const sss = require('shamirs-secret-sharing-ts')
const secret = Buffer.from('TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST')
// const shares = sss.split(secret, { shares: 5, threshold: 3 });

// console.log("Key1: " + shares[0].toString('base64') + "\n\r");
// console.log("Key2: " + shares[1].toString('base64') + "\n\r");
// console.log("Key3: " + shares[2].toString('base64') + "\n\r");
// console.log("Key4: " + shares[3].toString('base64') + "\n\r");
// console.log("Key5: " + shares[4].toString('base64') + "\n\r");

// const recovered = sss.combine([shares[2], shares[4], shares[3]]);

const recovered = sss.combine([
  Buffer.from('CAGuM2UmVVqgFERoyStgA2AfjQqtkp6RXTM/KkWr2JjhTGHlkKJkNyvQIuT6k/BNqJc47cztkL8Vs+FEKr804fPnYE8oPFbg1BxBjFQvGe/1SaMDWOIrHdfNUUg/ffcy+rfkZTYXou4GZdU/+NiSS8GRtLSec3N5/jpFNfsmTYDiCqmw5Xhpe3mqB9R65o6GKe0htT8sqylxEt4g+mR5/jDATr3oZwljklMI/ozeLoGprKwlqF7z9acth2RuSe7Lw0OF6LuFPJaeLfFXjTrTWORRqr+SUBFnAWTbCLI2hBOOhVvBOpMrJ5parxKvulLko/Y=', 'base64'), 
  Buffer.from('CAIR91xyNMp1uGYGAEJ2xlGRv275anqI+DmiOqDAlQ+zbUl5RtV1rKWPQqyhJFkOxuAiPo/YR86X2Y3EomA7GOCktcwBAsXQMCL79diyCtubSSXxm0wac+x8mOip9QQxLeQo9rqnUnIpAFu94cxWrtwvsD9cxq4ICeGpO4sviaCzk8ArCSiKhoii42cVC8Dgzfi3YlcKs83xLydXpTtTc+E9fN9uCzQR6uIPZvt5EE6+/LxcQ5j17tTpxrgZS0OTFAzBgmORbBukuMr5SrYSvqdMVT1qQpfiBKsX5QfganFRDP/G9+b8e2wmow0V5sSHFyQ=', 'base64'), 
  Buffer.from('CAO/xTkAYcPV6SI6yUkWkTHdMiFUrOQ5pV6dQ+UuTcNSASjI1iQR3o4LYGhb46kQbjIah0MV1yWCOWzFiIsP2RMX1dApe5Nk5B66LYzOE3FuVIbSw/oxPTv0yfSWqPNX1wDM1ozk8LwvMY7RGVHEsR2eBN/C5t0094/sLnBdxHNR3GnP7HDjqfFb5PZvuU5G5EGWhGhjGLCAHfkjXwwqyNGpMkKGOD0hePQHzHeHPpsXAxA865IGO3OQQY93R60M129EPthHUMg6wTuOx9jBtUNY/9b4MobRBZzMqLWC7kLf3aRUzTDXCPZcDEu6D5YmtIY=', 'base64')
]);

console.log(secret.toString());
console.log(recovered.toString());

console.log(secret.toString() === recovered.toString());
