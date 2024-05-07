const fs = require('fs');
const encoding = 'utf8';

export default function rand() {
  fs.readFile('m.txt', encoding, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
  
    let i = 0;
    let j = 0;
    const answ = [];
    const a = [];
  
    while (j < 400) {
      let res = '';
      let res1 = '';
      const listt = [];
  
      while (data[i] !== '•') {
        if (data[i] === '√') {
          break;
        }
        res += data[i];
        i++;
      }
  
      listt.push(res);
      res = '';
      let count = 0;
      i -= 2;
  
      while (count !== 5) {
        try {
          res1 += data.slice(i + 1, data.slice(i + 1).indexOf('\n') + i);
          i += data.slice(i + 1).indexOf('\n') + 1;
  
          if (res1.includes('√')) {
            res1 = ' •' + res1.slice(2);
            const correct = res1;
            listt.push(correct);
          } else {
            listt.push(res1);
          }
  
          res1 = '';
          count++;
        } catch (e) {
          // Ignore ValueError
        }
      }
  
      answ.push(listt);
      j++;
    }
  
    console.log(answ);
    return answ;
  });
  

}

