function outter(){
  var title = "outter title";
  return function() {
    console.log(title);
  }
}

inner = outter();
inner();