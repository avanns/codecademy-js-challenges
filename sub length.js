const subLength = (str, ch) => {
  let charFreq = 0;
  for (let i = 0; i < str.length; i++) {
      const letter = str[i];
      if (letter === ch) {
        charFreq++;
      }
  };
 
 if (charFreq < 2 || charFreq > 2) {
     return 0;
 } else {
     const distance = str.lastIndexOf(ch) - str.indexOf(ch);
     return distance +1;
 }
}

console.log(subLength('digitize', 'i'));