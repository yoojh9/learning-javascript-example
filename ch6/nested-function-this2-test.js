// 다른 변수에 this를 할당하여 해결
const o = {
  name: 'Jeonghyun',
  getBackwards: function(){
    const self = this;
    function getReverseName(){
      let nameBackwards = '';
      for(let i=self.name.length-1; i>=0; i--){
        nameBackwards += self.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} is eman ym, olleH`;
  }
};

console.log(o.getBackwards());