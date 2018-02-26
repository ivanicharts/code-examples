//Extend the String object with toBase64() and fromBase64() functions
const base64Table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

const padStart = (target, len, chars = ' ') => {
  let targetLen = target.length;
  const diff = len - targetLen;
  const charLen = chars.length;
  
  let prefix = '';
  
  while (targetLen < len) {
    prefix += chars;
    targetLen += charLen;
  }
  
  return prefix.slice(0, diff) + target;
};

const padEnd = (target, len, chars) => {
  const reversed = target.split('').reverse().join('');
  const padded = padStart(reversed, len, chars);
  return padded.split('').reverse().join('');
}

String.prototype.toBase64 = function () {

  let base64Str = '';
  const str = this;
  const binary = str.split('')
    .map(s => padStart(s.charCodeAt(0).toString(2), 8, '0'))
    .join('');
  
  for (let i = 0; i < binary.length; i += 6) {

    const mask = binary.slice(i, i + 6);
    const base64Index = parseInt(mask.length === 6 ? mask : padEnd(mask, 6, '0'), 2);
    base64Str += base64Table[base64Index];

  }  
  return base64Str;

}

String.prototype.fromBase64 = function () { 
  
  const str = this;
  let res = '';
  
  const binary  = str.split('')
    .map(s => padStart(base64Table.indexOf(s).toString(2), 6, '0'))
    .join('');

  for (let i = 0; i < binary.length; i += 8) {
    res += String.fromCharCode(parseInt(binary.slice(i, i + 8), 2));
  }

  return res;

};