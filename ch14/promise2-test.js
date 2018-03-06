const getId = () => new Promise( resolve => {
  setTimeout(() => resolve(1),1);
})

/*const getId = function(){
	return new Promise(function(resolve){
	  setTimeout(function(){
	  	resolve(1)
	  },1)
	})
}*/

const getNameById = id => new Promise(resolve => {
  setTimeout(() => resolve('Jeonghyun'),1);
})

/*const getNameById = function(id){
  return new Promise(function(resolve){
    setTimeout(function(){
    	resolve('chris')
    },1)
  })
}*/

// 방법 1
getId().then(id => {
  getNameById(id).then(name => {
    console.log({id, name})
  })
})


// 방법2
// 마지막 then 함수에서 id를 사용할 것이기 때문에 이러한 then 체인 구조에서는 임시로 저장할 id 변수를 사용하는 것이 불가피하다
let id;
Promise.resolve()
  .then(()=>getId())
  .then(_id=> (id=_id, getNameById(id)))
  .then(name => console.log({id, name}))
