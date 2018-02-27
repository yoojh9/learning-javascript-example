const hand = [randFace(), randFace(), randFace()];
for(let face of hand){
  console.log(`You rolled ${face}`);
}

function randFace(){
  return ["crown","anchor","heart","spade","clup","diamond"][rand(0,5)];
}

// m 이상 n 이하의 무작위 정수 반환
function rand(m,n){
  return m + Math.floor((n-m+1)*Math.random())
}