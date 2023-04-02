// Prova de code-decode-hex
//Font: https://stackoverflow.com/questions/52261494/hex-to-string-string-to-hex-conversion-in-nodejs

const convert = (from, to) => str => Buffer.from(str, from).toString(to);
const utf8ToHex = convert('utf8', 'hex');
const hexToUtf8 = convert('hex', 'utf8');

console.log(hexToUtf8(utf8ToHex('dailyfile.host')) === 'dailyfile.host');
let textToHex = utf8ToHex('Cacca de la Vacca');
console.log(textToHex);
let hextToText = hexToUtf8(textToHex);
console.log(hextToText);

