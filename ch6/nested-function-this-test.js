const o = {
  name: 'Jeonghyun',
  getBackwards: function(){
    function getReverseName(){
      let nameBackwards = '';
      for(let i=this.name.length-1; i>=0; i--){
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} is eman ym, olleH`;	// 하지만 여기서 getReverseName을 호출하면 this는 o가 아닌 다른것에 묶임.
  }
};

console.log(o.getBackwards());	// 이 시점에는 this는 의도한 대로 o에 연결됨