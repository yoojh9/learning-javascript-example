// 외부에서도 변수를 조작할 수 있기 위해 클로저에 getter, setter를 만듦
function a(){
  var _x = 1;
  return {
    get x() { return _x; },
    set x(v) { _x = v; }
  }
}

var c = a();
c.x = 10;
console.log(c.x)