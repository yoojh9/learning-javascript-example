var callback = function() {
  console.dir(this);  // window, global
};

var obj = {
  a: 1
};

setTimeout(callback.bind(obj), 100); // this를 obj로 변경하기 위해 bind를 사용하여 전달.