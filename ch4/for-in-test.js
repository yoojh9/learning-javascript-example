const player = { name:'Thomas', rank:'Midshipman', age:25 };
for(let prop in player){
	// hasOwnProperty를 호출할 필요는 없지만 이 메서드를 생략하게 되면 에러가 생길 때가 많음
  if(!player.hasOwnProperty(prop)) continue;	
  console.log(prop + ": " + player[prop]);
}