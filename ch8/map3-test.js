// callback 함수에서 this 개체 사용

var obj = {
  divisor: 10,
  remainder: function(value){
    return value % this.divisor;
  }
}

var numbers = [6,12,25,30];

var result = numbers.map(obj.remainder, obj);
console.log(result)