
var callback = function(){
  console.dir(this);
}

var obj = {
  a: 1,
  b: function(cb){
    cb.call(this); // obj
  }
};

callback();  // callback()은 함수이므로 this는 전역객체 window(브라우저), global(node.js)을 가르킴
obj.b(callback);  // cb.call(this) 호출을 통해 cb 함수에 this에 obj를 전달