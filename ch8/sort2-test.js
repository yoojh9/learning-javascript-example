const arr = [{name: "Suzanne"}, {name: "Jin"}, {name: "Trevor"}, {name: "Amanda"}];
arr.sort();
console.log(arr);

arr.sort((a,b) => a.name > b.name);	
console.log(arr);   // 알파벳 순
arr.sort((a,b) => a.name[1] < b.name[1]);
console.log(arr);   // name 프로퍼티의 두번째 글자의 알파벳 역순으로 정렬됨.



/* 
 * 이 예제에서는 boolean을 반환했지만, 숫자를 반환하는 함수를 쓸 수 있다.
   0이 반환되면 sort는 요소가 순서상 같다고 간주하고 순서를 바꾸지 않음.
 *
/
