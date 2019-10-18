function shift(plainText, key) {
  let out = "";
  key = Number(key);
  let plainTextLength = plainText.length;
  for(let i=0;i<plainTextLength;i++) {
    let charTemp = Number (plainText.charCodeAt(i));
    if (ifAlphabet(charTemp)){
      charTemp = charTemp+key;
      if (!ifAlphabet(charTemp)){
        charTemp = charTemp-26;
        if (!ifAlphabet(charTemp)){
          charTemp = charTemp+52;
        }
      }
    }
    let charShiftDone = String.fromCharCode(charTemp);
    out = out + charShiftDone;
  }
  return out;
}

function main() {
  let plainText = window.prompt("Enter Plain Text: ");
  let key = window.prompt("Enter Cipher Key: ");
  let result = shift(plainText,key);
  console.log(result);
}

function ifAlphabet(ascii) {
  if ((ascii>64 && ascii<91)|| (ascii>96 && ascii<123)) {
    return true;
  }
  return false;
}
