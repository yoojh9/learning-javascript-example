// 1) 클로저 사용 x
// 하지만 이렇게 만들 경우 car.power = 10, car.fuel = 1000 등 외부에서 접근 가능하므로 위험
var car = {
  fuel: 10, // 연료 (l)
  power: 2, // 연비 (km / l)
  total: 0, 
  run: function(km){
    var wasteFuel = km / this.power;
    if(this.fuel < wasteFuel){
      console.log('이동 불가')
      return;
    }
    this.fule -= wasteFuel;
    this.total += km;
  }
}

// 2) 클로저 사용
// 이점: 접근 권한 제어, 지역 변수 보호, 데이터 보존 및 활용 
var privateCar = function(f, p){
  var fuel = f;
  var power = p;
  var total = 0;
  return {
    run: function(km){
      var wasteFuel = km / power;
      if(fuel < wasteFuel){
        console.log('이동 불가')
        return;
      }
      fuel -= wasteFuel;
      total += km;

      console.log('이동 : '+ km+"km")
    }
  }
};

var car2 = privateCar(10,2);
car2.run(3)