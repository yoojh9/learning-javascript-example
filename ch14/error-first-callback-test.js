// 콜백에서 먼저 하는 일은 err가 참인지 확인. err가 참이라면 파일을 읽는데 문제가 있다는 뜻이므로 즉시 빠져나온다.

const fs = require('fs');
const fname = 'may_or_may_not_exist.txt';

fs.readFile(fname, function(err,data){
  if(err) // 에러객체 확인
    return console.error(`error reading file ${fname}: ${err.message}`);
  console.log(`${fname} contents: ${data}`);
});
