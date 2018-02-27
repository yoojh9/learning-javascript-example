let f;
{
  let o = { note : 'Safe'};
  f = function(){
    return o;
  }
}

let oRef = f();
oRef.note = "Not Safe";
console.log(oRef.note);
