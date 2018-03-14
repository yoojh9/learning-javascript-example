function a(x, y, z){
  console.log(this, x, y, z);
}

var b = {
  c: 'eee'
}

a.call(b, 1, 2, 3);
a.apply(b, [1, 2, 3]);

var c = a.bind(b);
c(1,2,3);

var d = a.bind(b,1,2);
d(3);
