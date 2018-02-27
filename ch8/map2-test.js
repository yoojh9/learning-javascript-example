// define the callback function
function areaOfCircle(radius){
  var area = Math.PI * (radius*radius);
  return area.toFixed(0);
}

// create an array
var radii = [10,20,30];

var areas = radii.map(areaOfCircle);
console.log(areas)