const arr = [1,2,3,4,5];

let obj = {
  vals: [1,2,3],
  logValues: function(v, i) {
    if(this.vals){
      console.log(this.vals, v, i);
    } else {
      console.log(this, v, i);
    }
  }
};

obj.logValues(1,2); // 이 때 this는 obj
arr.forEach(obj.logValues);  // arr.forEach의 콜백함수로써 obj.logValues를 호출함. 
                             //이 때 this는 arr.forEach의 this와 같으며
                             // arr.forEach의 this는 따로 설정되어 있지 않으므로 this는 window 객체와 같다 