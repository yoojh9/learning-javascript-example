const getId = cb => {
  setTimeout(() => cb(1), 1)
}

/*const getId = function(cb){
	setTimeout(function(){
	  return cb(1);
	},1)
}*/

const getNameById = (id, cb) => {
  setTimeout(() => cb('chris'), 1)
}

/*const getNameById = function(id, cb){
	console.log(id)
  setTimeout(function(){
    return cb('chris');
  },1)
}
*/

getId(id=>{
	getNameById(id, (name => {
		console.log({id, name})
	}))
})