let n = 0
while(true){
  n += 0.1;
	// if(n===0.3) break;	// 영원히 멈추지 않음
  if(Math.abs(n-0.3) < Number.EPSILON) break;	// 두개의 double 형식의 수가 같다고 할 수 있을 만큼 가까운지 판단
}

console.log(`stopped at ${n}`);
