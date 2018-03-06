const p1 =  new Promise(function(resolve, reject){
  resolve(1);
})

const p2 = new Promise(function(resolve, reject){
  resolve(3);
})

p1.then(function(data){
  console.log(data);
  return p2;
  })
 .then(function(data){
  console.log(data)
 })